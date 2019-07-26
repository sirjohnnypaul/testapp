import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
      data: [],
      filteredData: []
    };
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/add' />
    }
  }

  filterList(event){
    let updatedList = this.state.data;
    if (event.target.value !== '') {
      updatedList = updatedList.filter(function(product){
        return product.name.toLowerCase().search(
          event.target.value.toLowerCase()) !== -1;
      });
    }   
    this.setState({filteredData: updatedList})
  }

  componentDidMount() {
    fetch('//localhost:8981/products')
    .then(response => response.json())
    .then(data => this.setState({ data:data, filteredData:data }));
    }

  render() {
    const { products } = this.state;
    return (
      <div className="productsList">
        <h2 className="p-3 text-white"> Products List </h2>
          <div className="input-group flex-nowrap col-xs-11 col-md-8 m-auto pb-4">
            <input type="text" className="form-control text-center bg-custom searchcustom" onChange={this.filterList.bind(this)} placeholder="Search" aria-describedby="addon-wrapping"/>
          </div>
          {this.state.filteredData.map(item => (
            <div key={item._id} className="card col-xs-12 col-md-8 col-lg-6 mb-3">
            <div className="card__title">
              <div className="icon">
                <a href="#"><i class="fa fa-arrow-left"></i></a>
              </div>
            </div>
            <div className="card__body">
              <div className="half">
                <div className="featured_text">
                <Link to={'/details/'+item._id}><h1 className="titleActive">{item.name}</h1></Link>
                  <p className="sub mt-2">{item.number}</p>
                  <p className="price"></p>
                </div>
              </div>
              <div className="half">
                <div className="description col-11 text-justify">
                  {item.description.length > 100 ?
                  (
                    <p>{item.description.substring(0,100)}...</p>
                  ) : (
                    <p>{item.description}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="card__footer col-md-12">
              <div className="action col-md-12">
              <Link to={'/details/'+item._id}><button className="col-md-11" type="button">Check details</button></Link>
              </div>
            </div>
          </div>
          ))}
      </div>
    )
  }
}
