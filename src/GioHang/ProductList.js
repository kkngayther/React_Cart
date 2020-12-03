import React, { Component } from 'react';
import Product from './Product';
import productList from '../data/productList.json';
import Modals from './Modals';

class ProductList extends Component {
    state = {
        productDetail: productList[0],
        cart: [],
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
        let index = this.state.cart.findIndex(prod => prod.maSP === product.maSP);
        if (index !== -1) { }
        else {
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
    }
    xoaGioHang = (maSP) => {
        let index = this.state.cart.findIndex(prod => prod.maSP === maSP);
        this.state.cart.splice(index, 1);
        this.setState({
            cart: [...this.state.cart]
        })
    }
    tangGiamSoLuong = (maSP, tangGiam) => {
        let index = this.state.cart.findIndex(prod => prod.maSP === maSP);
        if (tangGiam) {
            this.state.cart[index].soLuong += 1;
        }
        else if (this.state.cart[index].soLuong !== 1) {
            this.state.cart[index].soLuong -= 1;
        }
        this.setState({
            cart: [...this.state.cart]
        })
    }

    render() {
        return (
            <div className="container">
                <Modals tangGiamSoLuong={this.tangGiamSoLuong} xoaGioHang={this.xoaGioHang} cart={this.state.cart} />
                <div className="text-right">
                    <button className="btn btn-success my-3" data-toggle="modal" data-target="#modelId">Cart (
                        {this.state.cart.reduce((tongSoLuong, sp, index) => {
                        return tongSoLuong += sp.soLuong;
                    }, 0)}
                    )</button>
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