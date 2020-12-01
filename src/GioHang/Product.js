import React, { Component } from 'react';

class Product extends Component {
    render() {
        const {prod, onViewDetail, onAddToCart} = this.props;
        return (
            <div className="col-4 text-left">
                <div className="card">
                    <img className="card-img-top" src={prod.hinhAnh} alt />
                    <div className="card-body">
                        <h4 className="card-title">{prod.tenSP}</h4>
                        <button className="btn btn-primary mr-3" onClick={()=> onViewDetail(prod)}>Detail</button>
                        <button className="btn btn-success" onClick={()=> onAddToCart(prod)}>Add to Cart</button>
                    </div>
                </div>

            </div>
        );
    }
}

export default Product;