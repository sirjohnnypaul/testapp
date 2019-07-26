import React, { Component } from 'react'
import Product from '../models/product'
import axios from 'axios';
import { Redirect } from 'react-router-dom'

export default class Details extends Component {
  constructor(props) {
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleNumberChange = this.handleNumberChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)

    this.state = {
      data: {},
      name: '',
      number: '',
      images: [],
      imagesParsed: [],
      description: '',
      id: null,
      redirect: false,
      delete: false
    };
  }

    componentDidMount() {
        let id = this.props.match.params.itemdata;
        fetch(`//localhost:8981/products/${id}`)
        .then(response => response.json())
        .then(data => this.setState({ 
          data,
          name: data.name,
          number: data.number,
          description: data.description,
          images: data.images,
          id: id
        }));
    }

    handleNameChange = (namechanged) => {
      console.log(namechanged);
      this.setState({
        name: namechanged.target.value
      })
    }

    handleNumberChange = (numberchanged) => {
      this.setState({
        number: numberchanged.target.value
      })
    }

    handleDescriptionChange = (descriptionchanged) => {
      this.setState({
        description: descriptionchanged.target.value
      })
    }


     handleUpdate() {
      for(let i=0; i<this.state.images.length; i++){
        let image = {
          name:this.state.images[i].name,
          url:this.state.images[i].url
        }
        this.state.imagesParsed.push(image);
      }
      let updatedProduct = new Product(this.state.name,this.state.number,this.state.description,this.state.imagesParsed);
      console.log(updatedProduct);
        return fetch(`//localhost:8981/products/${this.state.id}`, {
          method: 'PUT',
          body: JSON.stringify(updatedProduct),
          headers: {
              'Content-Type': 'application/json'
          }
      }).catch(err => err);
  }

  handleDelete = () => {
    return fetch(`//localhost:8981/products/${this.state.id}`, {
      method: 'DELETE'
  }).catch(err => err);
  return <Redirect to='/' />
  }

  render() {
    let data = this.state.data;
    let imagesToRender = [];
    let images = this.state.data.images;
    if(images){
      for(let i = 0; i<images.length; i++){
        imagesToRender.push(
        <div className="singleImage p-2">
          <img className="imagesRender" src={images[i].url} width="150" height="150"/>
          <p className="text-white p-2 bg-custom customTitles">{images[i].name}</p>
        </div>
        );
      }
    } else {
      imagesToRender.push(
        <h2 className="p-5">Images Not Attached</h2>
      )
    }

    return (
      
      <div className="productsList mt-5 col-xs-12">
        <h1 className="p-3 text-white">Product Details</h1>
            <div className="itemList bg-custom col-xs-11 col-md-8 col-lg-6 m-auto">

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text inputCustom" id="basic-addon1" >Name</span>
                </div>
                <input type="text" className="form-control inputCustom searchcustom" aria-describedby="basic-addon1" onChange={this.handleNameChange} value={this.state.name}/>
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text inputCustom" id="basic-addon1">Number</span>
                </div>
                <input type="text" className="form-control inputCustom searchcustom" aria-describedby="basic-addon1" onChange={this.handleNumberChange} value={this.state.number}/>
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text inputCustom">Description</span>
                </div>
                <textarea className="form-control inputCustom searchcustom" onChange={this.handleDescriptionChange} value={this.state.description}></textarea>
              </div>

              <h4 className="text-white"> Product Images </h4>
              <div className="card__footer col-md-12 mb-4"></div>

              <div className="imagesSection d-inline-flex">
                  {imagesToRender}
              </div>

              <button className="btn btn-info d-block mb-3 pl-5 pr-5 buttoncustom col-12" onClick={this.handleUpdate}>Update changes</button>
              <button className="btn btn-info d-block m-auto pl-5 pr-5 buttoncustom2 col-xs-12 col-md-6"  data-toggle="modal" data-id="${this.state.id}" data-target="#deleteModal">Delete product</button>
             

              <div className="modal fade col-12" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog col-xs-12 col-md-8" role="document">
                  <div className="modal-content custommodal">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Are you sure to delete product?</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      Action will permemently affect the product. This change will not be able to be restored.
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary custommodalbuttonleft" data-dismiss="modal">Cancel</button>
                      <button type="button" className="btn btn-primary custommodalbuttonright" onClick={this.handleDelete}>Yes,delete</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
      </div>

      
    )
  }
}
