import React, { Component } from 'react'

export default class EditProduct extends Component {

        constructor(props) {
        super(props);

        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleNumberChange = this.handleNumberChange.bind(this)
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this)

        this.state = {
          name: '',
          number: '',
          images: [],
          imagesParsed: [],
          description: ''
        };

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

    handleAddImg = () => {
      alert("I was not expected to finish it. However I'm working on that anyway. Will finish this functionality after delivering to you demanded features of trial app. For now I just prepared the view")
    }

    handleAdd = () => {
      alert("I was not expected to finish it. However I'm working on that anyway. Will finish this functionality after delivering to you demanded features of trial app. For now I just prepared the view")
    }

  render() {
    return (
      <div className="productsList mt-5 col-xs-12">
        <h1 className="p-3 text-white">Add New Product</h1>
            <div className="itemList bg-custom col-xs-11 col-md-8 m-auto">

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
              <button className="btn btn-sm btn-secondary d-block m-auto" onClick={this.handleAddImg}>Add Product Image</button>
              <div className="imagesSection d-inline-flex p-2"></div>

              <button className="btn btn-info m-auto pl-5 pr-5 buttoncustom col-12" onClick={this.handleAdd}>Add Product</button>
            </div>
      </div>
    )
  }
}
