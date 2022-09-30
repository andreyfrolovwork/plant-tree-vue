<script>
import { get } from 'lodash'

export default {
  name: 'TTable',
  props: {
    rows: {},
  },
  methods: {
    renderColumns(createElement, row, columnsOptions) {
      return columnsOptions.map((column, index) => {
        return createElement('td', { class: 'vu-table__tbody-td' }, [
          // если есть scopedSlot, то отдаем слот и в него помещаем обьект строки, если нет то просто рисуем ячейку
          column.scopedSlot ? column.scopedSlot({ row }) : row[column.prop],
        ])
      })
    },
  },
  render(createElement) {
    // проверка что слот имеет tag Column
    const vNodes = this.$slots.default
      .filter(item => {
        return (item.tag === 'Column')
      })

    const columnsOptions = vNodes.map(column => {
      // берем атрибуты из колонки
      const props = column.data.attrs
      // извлекаем именованый слот label
      const labelSlot = get(column, 'data.scopedSlots.label')
      // извлекаем слот для ячейки
      const scopedSlot = get(column, 'data.scopedSlots.default')

      const rt = Object.assign({}, props, {
          scopedSlot,
          labelSlot,
        },
      )
      return rt
    })
    // готовим колонки
    const columnsHead = columnsOptions.map((column, index) => {
      // если есть слот labelSlot, то рисуем его, если нет то обычный хедер
      return column.labelSlot ?
        createElement('th', { class: 'vu-table__thead-th', key: index }, column.labelSlot())
        :
        createElement('th', { class: 'vu-table__thead-th', key: index }, column.title)
    })
    const rows = this.rows.map((row, index) => {
      return createElement('tr', { key: index }, [this.renderColumns(createElement, row, columnsOptions)])
    })

    return createElement('table', { class: 'vu-table' }, [
      createElement('thead', { class: 'vu-table__thead' }, [
        createElement('tr', [columnsHead]),
      ]),
      createElement('tbody', { class: 'vu-table__tbody' }, [rows]),
    ])

  },
}
</script>
<style lang='scss'>
table {
  font-size: 10px;

  border: 1px solid #eee;
  table-layout: fixed;
  width: 100%;
  margin-bottom: 20px;
}

table th {
  font-weight: bold;
  padding: 5px;
  background: #efefef;
  border: 1px solid #dddddd;
}

table td {
  padding: 5px 10px;
  border: 1px solid #eee;
  text-align: left;
}

table tbody tr:nth-child(odd) {
  background: #fff;
}

table tbody tr:nth-child(even){
  background: #F7F7F7;
}
</style>
