<template>
    <div class="col-lg-9">
        <h3 class="text-start">Товари</h3>
        <div class="btn-group mb-3" role="group" aria-label="Панель керування">
           
        </div>
        <table class="table table-striped table-hover">
            <thead>
                <th style="width: 100px;" scope="col">ID</th>
                <th style="width: 80px;" scope="col"></th>
                <th scope="col">Назва</th>
                <th scope="col">Ціна</th>
                <th scope="col">Знижка</th>
                <th scope="col">Ціна з<br>урахуванням<br>знижки</th>
            </thead>
            <tbody class="table-group-divider">
                <tr v-for = "product in products" v-bind:key="product.id">
                    <td> {{ product.id }}</td>
                    <td><img class="table-image table-image_small" :src=product.image></td>
                    <td> {{ product.title }}</td> 
                    <td> {{ product.price }}</td> 
                    <td> {{ product.discount }}</td> 
                    <td> {{ product.priceWithDiscount }}</td> 
                </tr>
            </tbody>
        </table>
    </div>


</template>

<style>
.table-image_small {
  max-width: 80px;
  height: auto;
}
</style>

<script>
import ProductsService from '../sevices/ProductsService'

export default {
  name: 'TypePage',
  data(){
            return {
                products : []
            }
        },
        methods:{
            getAll(){
                ProductsService.getAll().then((response) => {
                    this.products = response.data.map(function(product) {
                        if (product.images) {
                            product['image'] = product.images[0].urlSmall;
                        } else {
                            product['image'] = "http://via.placeholder.com/40x40/FFAAAA/?text=small";
                        }
                        return product;
                    });
                })
            }
        },
        created(){
            this.getAll()
        }
        
}
</script>