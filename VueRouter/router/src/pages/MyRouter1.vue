<template>
    <div>
        <textarea name="" id="" cols="30" rows="10" v-model="content"></textarea>
        <button @click="fun1">导入</button>
        <button @click="fun2">导出</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                content:''
            }
        },
        methods: {
            /**
             * 导入
             */
            fun1() {
                const input = document.createElement('input')
                input.type = 'file'
                let self = this
                input.onchange = function() {
                    let file = input.files[0]
                    let reader = new FileReader()
                    reader.onload = function() {
                        self.content = this.result
                        reader = null
                    }
                    reader.readAsText(file)
                    input.remove()
                }
                input.click()
            },
            fun2() {
                let file = new Blob([this.content],{
                    type:'application/json'
                })
                let url = URL.createObjectURL(file)
                let link = document.createElement('a')
                link.href = url
                link.download = 'data.json'
                link.click()
                link.remove()
            }
        },
    }
</script>

<style scoped>
    button{
        width: 50px;
        height: 25px;
        background-color: antiquewhite;
    }
</style>