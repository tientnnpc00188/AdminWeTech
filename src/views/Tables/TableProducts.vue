<template>
  <div>
    <!-- Main content -->
    <div>
      <!-- Page content -->
      <div class="container-fluid mt--6">
        <div class="row justify-content-center">
          <div class="col">
            <div class="card">
              <div class="container">
                <br />
                <!-- Nav tabs -->
                <ul class="nav nav-tabs" role="tablist">
                  <li class="nav-item">
                    <router-link to="/tableproducts">
                      <a class="nav-link active" data-toggle="tab" href="javascript:void(0)">Tất cả</a>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <!-- <router-link to="pending"> -->
                    <a class="nav-link" data-toggle="tab" href="#Pending">Sản phẩm chờ duyệt</a>
                    <!-- </router-link> -->
                  </li>
                </ul>

                <!-- Tab panes -->
                <div class="tab-content">
                  <div id="all" class="container tab-pane active">
                    <br/>
                    <div class="table-responsive">
                      <h5 class="col-sm-2">Có <a style="color: #ED0000;">{{rowData.length}}</a> Sản Phẩm</h5>
                      <table id="shop" class="table align-items-center table-flush">
                        <thead class="thead-light">
                          <tr>
                            <th scope="col" class="sort" data-sort="name">ID</th>
                            <th scope="col" class="sort" data-sort="name">Tên cửa hàng</th>
                            <th scope="col" class="sort" data-sort="name">Tên sản phẩm</th>
                            <th scope="col" class="sort" data-sort="budget">Ảnh sản phẩm</th>
                            <th scope="col" class="sort" data-sort="budget">Giá tiền</th>
                            <th scope="col" class="sort" data-sort="budget">Số lượng</th>
                            <th scope="col" class="sort" data-sort="budget">Mã giảm giá</th>
                            <th scope="col">Thao tác</th>
                          </tr>
                        </thead>
                        <tbody class="list" v-for="(rowData, index) in rowData" v-bind:key="index">
                          <tr>
                            <td>{{rowData.product_id}}</td>
                            <td>{{rowData.shop_name}}</td>
                            <td>{{rowData.product_name}}</td>
                            <th scope="row">
                              <div class="media align-items-center">
                                <a href="#" class="avatar rounded-circle mr-3">
                                  <img
                                    alt="Chưa có ảnh"
                                    v-bind:src="rowData.image"
                                  />
                                </a>
                              </div>
                            </th>
                            <td>{{rowData.price}}</td>
                            <td>{{rowData.quantity}}</td>
                            <td>{{rowData.dícount_price}}</td>
                            <td class="text-right">
                              <base-dropdown class="dropdown"
                                            position="right">
                                <template>
                                  <div class="dropdown-item" href="#">
                                    <base-a block type="primary" class=" mb-3" @click="showdetail(rowData)">
                                        Chi tiết
                                    </base-a>
                                  </div>
                                </template>
                              </base-dropdown>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <modal :show.sync="modals.modal1">
                                      <h4 style="color: #BE0202">Giới thiệu</h4>
                                      <p style="color: gray">{{detail.introduction}}</p>
                                      <h4 style="color: #0D05A4">Mô tả</h4>
                                      <h5 style="color: gray">{{detail.description}}</h5>
                                      <template slot="footer">
                                        <base-button type="link" class="ml-auto" @click="modals.modal1 = false">Close
                                        </base-button>
                                      </template>
                                    </modal>
                  </div>
                  <!-- <div id="Pending" class="container tab-pane fade">
                    <br />
                    abc
                    <br />
                  </div> -->
                  <div class="card-footer py-4">
                    <nav aria-label="...">
                      <ul class="pagination justify-content-end mb-0">
                        <li class="page-item disabled">
                          <a class="page-link" href="#" tabindex="-1">
                            <i class="fas fa-angle-left"></i>
                            <span class="sr-only">Previous</span>
                          </a>
                        </li>
                        <li class="page-item active">
                          <a class="page-link" href="#">1</a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            2
                            <span class="sr-only">(current)</span>
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">3</a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            <i class="fas fa-angle-right"></i>
                            <span class="sr-only">Next</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'
import Modal from "@/components/Modal.vue";
import {server} from './../../main'


export default {
  components: {
    Modal
  },
  data(){
    return{
      rowData: [
        
      ],
      blocked: [
        
      ],
      detail: {},
      modals: {
        modal1: false,
      }
    }
  },
  created(){
    this.getData()
    $('#product').DataTable();
  },
  methods: {
    getData(){
      let this2 = this
      axios.post(`${server}/product`)
      .then(function (response) {
        this2.rowData = response.data
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    },
    showdetail(rowData){
      this.modals.modal1 = true
      this.detail = rowData
    }
  }
};
</script>

<style>
  .btn-update{
    background-color: #e41515;
    border: none;
    color: white;
    padding: 5px 10px 5px 10px;
    font-size: 14px;
    border-radius: 5px;
    margin-bottom: 5px
  }
  .btn-update:hover{
    background-color: #652ce9;
  }
  .label_title {
    margin: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 250px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
</style>