import React, { Component } from 'react';
import Product from './Product';
import productList from '../data/productList.json';
import Modals from './Modals';

class ProductList extends Component {
    state = {
        productDetail: productList[0],
        cart: [
            {
                maSP: 1,
                hinhAnh: "./img/vsphone.jpg",
                tenSP: "VinSmart Live",
                donGia: 5700000,
                soLuong: 1,
            }
        ]
    }

    renderSanPham = () => {
        return productList.map((product, index) => {
            return (
                <Product onViewDetail={this.viewDetail} onAddToCart={this.addToCart} prod={product} key={index} />
            )
        })
    }
    viewDetail = (product) => {
        this.setState({
            productDetail: product
        })
    }
    addToCart = (product) => {
        this.setState({
            cart: [
                ...this.state.cart,
                {
                    maSP: product.maSP,
                    hinhAnh: product.hinhAnh,
                    tenSP: product.tenSP,
                    donGia: product.giaBan,
                    soLuong: 1,
                }
            ]
        })
    }

    render() {
        return (
            <div className="container">
                <Modals cart={this.state.cart}/>
                <div className="text-right">
                    <button className="btn btn-success my-3" data-toggle="modal" data-target="#modelId">Cart</button>
                </div>
                <div className="row">
                    {this.renderSanPham()}
                </div>
                <div className="row mt-4">
                    <div className="col-4">
                        <img src={this.state.productDetail.hinhAnh} width="300" />
                    </div>
                    <div className="col-8">
                        <table className="table text-left">
                            <tr>
                                <th>Màn hình</th>
                                <td>{this.state.productDetail.manHinh}</td>
                            </tr>
                            <tr>
                                <th>Hệ điều hàn</th>
                                <td>{this.state.productDetail.heDieuHanh}</td>
                            </tr>
                            <tr>
                                <th>Camera Trước</th>
                                <td>{this.state.productDetail.cameraTruoc}</td>
                            </tr>
                            <tr>
                                <th>Camera Sau</th>
                                <td>{this.state.productDetail.cameraSau}</td>
                            </tr>
                            <tr>
                                <th>RAM</th>
                                <td>{this.state.productDetail.ram}</td>
                            </tr>
                            <tr>
                                <th>ROM</th>
                                <td>{this.state.productDetail.rom}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductList;