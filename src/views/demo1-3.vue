<template>
  <div
    class="ivu-table"
    v-on:load="setTableShadow"
    v-on:resize="setTableShadow"
  >
    <div
      class="ivu-table__body tablebackground"
      ref="tableScroll"
      v-on:scroll="handleBodyScroll"
    >
      <table
        cellspacing="0"
        cellpadding="0"
        border="0"
        style="width: 900px"
        ref="scrollHead"
      >
        <colgroup>
          <col
            v-for="(column, index) in columns2"
            :key="index"
            :width="column.width"
          />
        </colgroup>
        <thead>
          <tr>
            <th v-for="(column, index) in columns2" :key="index">
              {{ column.title || "" }}
            </th>
          </tr>
        </thead>
      </table>
      <div
        class="ivu-table__body-wrapper"
        ref="tableContent"
        v-on:scroll="handleBodyScrollTop"
      >
        <table cellspacing="0" cellpadding="0" border="0" style="width: 900px">
          <colgroup>
            <col
              v-for="(column, index) in columns2"
              :key="index"
              :width="column.width"
            />
          </colgroup>
          <tbody class="ivu-table-tbody">
            <tr v-for="(entry, idx) in data4" :key="idx">
              <td v-for="(column, index) in columns2" :key="index">
                <span v-if="entry[column.key]">
                  {{ entry[column.key] }}
                </span>
                <span v-else><button>编辑</button><button>复制</button></span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div
      class="ivu-table__fixedLeft"
      :class="{ 'ivu-table__fixedLeft-scroll': hasLeft }"
    >
      <table cellspacing="0" cellpadding="0" border="0" style="width: 900px">
        <colgroup>
          <col
            v-for="(column, index) in columns2"
            :key="index"
            :width="column.width"
          />
        </colgroup>
        <thead>
          <tr>
            <th
              v-for="(column, index) in columns2"
              :key="index"
              :class="{ tdHidden: column.fixed != 'left' }"
            >
              {{ column.title || "" }}
            </th>
          </tr>
        </thead>
      </table>
      <div style="height: 177px; overflow: hidden" ref="fixedBody">
        <table cellspacing="0" cellpadding="0" border="0" style="width: 900px">
          <colgroup>
            <col
              v-for="(column, index) in columns2"
              :key="index"
              :width="column.width"
              :class="{ tdHidden: column.fixed != 'left' }"
            />
          </colgroup>
          <tbody class="ivu-table-tbody">
            <tr v-for="(entry, index) in data4" :key="index">
              <td v-for="(column, index) in columns2" :key="index">
                <span v-if="entry[column.key]">{{ entry[column.key] }}</span>
                <span v-else><button>编辑</button><button>复制</button></span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div
      class="ivu-table__fixedRight"
      :class="{ 'ivu-table__fixedRight-scroll': hasRight }"
    >
      <table cellspacing="0" cellpadding="0" border="0" style="width: 900px">
        <colgroup>
          <col
            v-for="(column, index) in columns2"
            :key="index"
            :width="column.width"
          />
        </colgroup>
        <thead>
          <tr>
            <th
              v-for="(column, index) in columns2.concat().reverse()"
              :key="index"
              :class="{ tdHidden: column.fixed != 'right' }"
            >
              {{ column.title || "" }}
            </th>
          </tr>
        </thead>
      </table>
      <div style="height: 177px; overflow: hidden" ref="fixedRightBody">
        <table cellspacing="0" cellpadding="0" border="0" style="width: 900px">
          <colgroup>
            <col
              v-for="(column, index) in columns2.concat().reverse()"
              :key="index"
              :width="column.width"
            />
          </colgroup>
          <tbody class="ivu-table-tbody">
            <tr v-for="(entry, index) in data4" :key="index">
              <td
                v-for="(column, index) in columns2.concat().reverse()"
                :class="{ tdHidden: column.fixed != 'right' }"
                :key="index"
              >
                <span v-if="entry[column.key]">{{ entry[column.key] }}</span>
                <span v-else><button>编辑</button><button>复制</button></span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  filters: {
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
  },
  setup(props) {
    const hasLeft = ref(false);
    const hasRight = ref(false);
    const scrollValue = ref(0);
    const sortKey = ref<number>(0);
    const leftScroll = ref<number>(0);
    const sortOrders = ref<number[]>([]);
    const tableScroll = ref();
    const fixedBody = ref();
    const fixedRightBody = ref();
    const tableContent = ref();
    const columns2 = [
      {
        title: "姓名",
        key: "name",
        width: 100,
        fixed: "left",
      },
      {
        title: "年龄",
        key: "age",
        width: 100,
      },
      {
        title: "省份",
        key: "province",
        width: 100,
      },
      {
        title: "市区",
        key: "city",
        width: 200,
      },
      {
        title: "地址",
        key: "address",
        width: 200,
      },
      {
        title: "邮编",
        key: "zip",
        width: 100,
      },
      {
        title: "操作",
        key: "action",
        fixed: "right",
        width: 100,
      },
    ];
    const data4 = [
      {
        province: "Connecticut",
        city: "South Anastacio",
        name: "Oswaldo Considine",
        zip: "62352",
        age: 689,
        address: "49967 Lloyd Ridge",
      },
      {
        province: "Ohio",
        city: "Lake Sydnee",
        name: "Kieran Thompson",
        zip: "03930",
        age: 234,
        address: "674 Stanton Locks",
      },
      {
        province: "Montana",
        city: "South Alexzanderfort",
        name: "Lynn Willms",
        zip: "32615-1991",
        age: 595,
        address: "40564 Alysha Mill",
      },
      {
        province: "Virginia",
        city: "Lynnmouth",
        name: "Gwendolyn Mohr Jr.",
        zip: "15517",
        age: 593,
        address: "573 Hegmann Gardens",
      },
      {
        province: "Nevada",
        city: "Smithamtown",
        name: "Kobe Tillman",
        zip: "49700",
        age: 942,
        address: "85408 Gustave Key",
      },
      {
        province: "Louisiana",
        city: "Durganberg",
        name: "Cletus Rempel",
        zip: "41996",
        age: 647,
        address: "009 Wintheiser Extensions",
      },
      {
        province: "Pennsylvania",
        city: "South Mattfurt",
        name: "Stephany Erdman",
        zip: "72236",
        age: 266,
        address: "2123 Rolfson Cliff",
      },
      {
        province: "Vermont",
        city: "South Nicolas",
        name: "Thad Stark",
        zip: "53975-4801",
        age: 920,
        address: "102 Katelyn Lodge",
      },
      {
        province: "Oklahoma",
        city: "West Syble",
        name: "Shayne Block",
        zip: "77066",
        age: 199,
        address: "61061 Terry Orchard",
      },
      {
        province: "Tennessee",
        city: "Austenborough",
        name: "Giovanna Yost",
        zip: "55889-8053",
        age: 605,
        address: "0964 Reynolds Junction",
      },
      {
        province: "Hawaii",
        city: "Timmyborough",
        name: "Norene Will II",
        zip: "63035-1193",
        age: 74,
        address: "812 Zachariah Extensions",
      },
      {
        province: "Wisconsin",
        city: "North Theresa",
        name: "Ila Ruecker",
        zip: "92413-8438",
        age: 935,
        address: "84530 Corkery Plains",
      },
      {
        province: "Michigan",
        city: "East Akeemstad",
        name: "Gina Schaden I",
        zip: "36035",
        age: 393,
        address: "24068 Karley Path",
      },
      {
        province: "Illinois",
        city: "Velmahaven",
        name: "Raoul Bailey",
        zip: "84101-0326",
        age: 871,
        address: "02314 Tracy Tunnel",
      },
    ];
    const sortBy = (key: number) => {
      sortKey.value = key;
      sortOrders.value[key] = sortOrders.value[key] * -1;
    };
    const handleBodyScroll = () => {
      console.log("handleBodyScroll:");
      scrollValue.value = (tableScroll.value as any).scrollLeft;
      setTableShadow();
      hasRight.value = scrollValue.value - leftScroll.value < 0;
      hasLeft.value = scrollValue.value > 0;
    };
    const handleBodyScrollTop = (event) => {
      (fixedBody.value as any).scrollTop = event.target.scrollTop;
      (fixedRightBody.value as any).scrollTop = event.target.scrollTop;
    };
    const setTableShadow = () => {
      const tableContentWidth = (tableContent.value as any).clientWidth;
      const tableScrollWidth = (tableScroll.value as any).clientWidth;
      console.log("setTableShadow tableContentWidth:", tableContentWidth);
      console.log("setTableShadow tableScrollWidth:", tableScrollWidth);
      leftScroll.value = tableContentWidth - tableScrollWidth;
      // handleBodyScroll();
    };
    onMounted(() => {
      window.onresize = setTableShadow;
      window.onload = setTableShadow;
    });
    return {
      hasLeft,
      hasRight,
      scrollValue,
      leftScroll,
      columns2,
      data4,
      sortBy,
      setTableShadow,
      handleBodyScroll,
      handleBodyScrollTop,
    };
  },
});
</script>

<style lang="scss" scoped>
table {
  table-layout: fixed;
}
table td {
  border-bottom: 1px solid #999;
}
.tdHidden {
  visibility: hidden;
}
.ivu-table {
  width: 500px;
  height: 200px;
  overflow: hidden;
  border: 1px solid #ccc;
  position: relative;
}
.ivu-table__body {
  height: 100%;
  overflow-x: auto;
  position: relative;
  overflow-y: hidden;
}
.ivu-table-tbody tr {
  margin-bottom: 10px;
}
.tablebackground {
  background: linear-gradient(white 15px, hsla(0, 0%, 100%, 1)) 100px 0 / 15px
      300px,
    radial-gradient(at left, rgba(0, 0, 0, 0.2), transparent 80%) 100px 0 / 10px
      200px,
    linear-gradient(to left, white 15px, hsla(0, 0%, 100%, 1)) right / 110px
      300px,
    radial-gradient(at right, rgba(0, 0, 0, 0.2), transparent 70%) 390px / 15px
      300px;
  background-repeat: no-repeat;
  background-attachment: local, scroll, local, scroll;
}
.ivu-table__header-wrapper {
  overflow-y: auto;
  height: 177px;
  width: 800px;
  overflow-x: hidden;
}
.ivu-table__fixedLeft {
  width: 100px;
  position: absolute;
  top: 0;
  left: 0;
  overflow-x: hidden;
  background: #fff;
  border-right: 0;
  box-shadow: none;
  transition: box-shadow 0.3s ease;
}
.ivu-table__fixedRight {
  width: 100px;
  position: absolute;
  right: 0;
  top: 0;
  background: #fff;
  border-left: 0;
  box-shadow: none;
  transition: box-shadow 0.3s ease;
}
.ivu-table__fixedLeft-scroll {
  box-shadow: 6px 0 6px -4px rgba(0, 0, 0, 0.2);
}
.ivu-table__fixedRight-scroll {
  box-shadow: -6px 0 6px -4px rgba(0, 0, 0, 0.2);
}
</style>
