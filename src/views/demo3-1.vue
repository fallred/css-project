<template>
    <table>
        <tr>
            <td>就1列就1列就1列就1列就1列</td>
            <td>当父级relative，且宽度很小的时候，例如{position:relative; width:20px;}，absolute元素也会出现一柱擎天的情况；</td>
            <td>当父级relative，且宽度很小的时候，例如{position:relative; width:20px;}，absolute元素也会出现一柱擎天的情况；</td>
        </tr>
    </table>
</template>
<style lang="scss" scoped>
table{
    background:#a0b3d6;
    font-size:12px;
    border-spacing: 1px;
    width: 280px;
    margin: 0 auto;
    text-align: left;
}
th{border:3px solid #fff; background:#f0f3f9; text-align:center;}
td{padding:2px 4px; border:3px solid #fff; background:#f9f9f9;}
tr:hover{opacity:0.95; filter:Alpha(opacity=95);}

</style>