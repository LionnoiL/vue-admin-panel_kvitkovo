<template>
    <div class="col-lg-9">
        <h3 class="text-start">Кольори</h3>
        <div class="btn-group mb-3" role="group" aria-label="Панель керування">
            <button type="button" class="btn btn-success">Створити</button>
        </div>
        <table class="table table-striped table-hover">
            <thead>
                <th style="width: 100px;" scope="col">ID</th>
                <th scope="col">Назва</th>
            </thead>
            <tbody class="table-group-divider">
                <tr v-for = "color in colors" v-bind:key="color.id">
                    <td> {{ color.id }}</td>
                    <td class="text-start"> {{ color.name }}</td> 
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import ColorService from '../sevices/ColorService'

export default {
  name: 'ColorsPage',
  data(){
            return {
                colors : []
            }
        },
        methods:{
            getColors(){
                ColorService.getColors().then((response) => {
                    this.colors = response.data;
                })
            }
        },
        created(){
            this.getColors()
        }
        
}
</script>