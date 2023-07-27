export default {
  name: 'ElTableCheckbox',
  props: [
    'row',
    'column',
    'store',
    '$index'
  ],
  render() {
    const { row, column, store, $index } = this;
    return <el-checkbox
      nativeOn-click={ (event) => event.stopPropagation() }
      value={ store.isSelected(row) }
      disabled={ column.selectable ? !column.selectable.call(null, row, $index) : false }
      on-input={ () => { store.commit('rowSelectedChanged', row); } }
    />;
  }
};
