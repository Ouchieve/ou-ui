<template>
    <div class="card" :style="width?{width:width+'px'}:{}">
        <div class="card-img" :style="imgHeight?{height:imgHeight+'px'}:{}">
            <img :src="imgSrc" alt="img">
        </div>
        <div v-if="summary" class="card-summary">
            {{summary}}
        </div>
        <div v-else>
            <slot></slot>
        </div>
        <slot name="footer"></slot>
    </div>
</template>
<script>
    export default {
        name:'Card',
        props:{
            width:{//卡片宽度
                type:Number,
                default:0
            },
            imgSrc:{//图片地址
                type:String,
                default:''
            },
            imgHeight:{//图片高度
                type:Number,
                default:0
            },
            summary:{//卡片概述
                type:String,
                default:''
            }
        }
    }
</script>
