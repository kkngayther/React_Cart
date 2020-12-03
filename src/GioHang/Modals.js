import React, { Component } from 'react';

class Modals extends Component {
    render() {
        const { cart, xoaGioHang, tangGiamSoLuong } = this.props;
        return (
            <div>
                <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Cart</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Mã sản phẩm</th>
                                            <th>Hình ảnh</th>
                                            <th>Tên sản phẩm</th>
                                            <th>Số lượng</th>
                                            <th>Đơn giá</th>
                                            <th>Thành tiền</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.props.cart.map((product, index) => {
                                                return (
                                                    <tr>
                                                        <td>{product.maSP}</td>
                                                        <td><img width="30px" src={product.hinhAnh} /></td>
                                                        <td>{product.tenSP}</td>
                                                        <td>
                                                            <button className="btn btn-primary" onClick={() => tangGiamSoLuong(product.maSP, false)}>-</button>
                                                            {product.soLuong}
                                                            <button className="btn btn-primary" onClick={() => tangGiamSoLuong(product.maSP, true)}>+</button>
                                                        </td>
                                                        <td>{product.donGia.toLocaleString()}</td>
                                                        <td>{(product.soLuong * product.donGia).toLocaleString()}</td>
                                                        <td><button className="btn btn-danger" onClick={() => xoaGioHang(product.maSP)}>Xóa</button></td>
                                                    </tr>
                                                )
                                            })
                                        }

                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colSpan="5"></td>
                                            <td>Tổng tiền</td>
                                            <td>
                                                {
                                                    this.props.cart.reduce((tongTien, sp, index) => {
                                                        return tongTien += sp.soLuong * sp.donGia;
                                                    },0).toLocaleString()
                                                }
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modals;