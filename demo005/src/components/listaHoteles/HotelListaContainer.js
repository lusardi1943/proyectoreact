import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions';
import HotelListaItem from './HotelListaItem'
import Grid from '@material-ui/core/Grid';

class HotelListaContainer extends React.Component {

  componentDidMount() {
    this.props.cargarNota()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      return this.listAllNotes()
    }
  }

  listAllNotes = () => {
    return this.props.nota.sort((a,b) => parseInt(a.id) - parseInt(b.id)).map((lista, index) => {
      return <Grid item md={3} xs={12} key={index} lista={lista}><HotelListaItem key={index} lista={lista}/></Grid>
    })
  }
  
  render() {
    if (this.props.nota.length > 0) {
      return (
        <Grid container item md={12} className="grid-cards" spacing={24} >
          {this.listAllNotes()}
        </Grid>
      )}else{
        return(
          <div>No hay nada!</div>
        )
      }}
}


function mapStateToProps(state, props) {
  return {
    nota: state.nota.hotels,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HotelListaContainer)