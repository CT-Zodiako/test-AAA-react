import PropTypes from 'prop-types'

const getResult = () => {
    return 1+1;
}



export const FirstApp = ( {
    title,
    subtitle='feo feo'
} ) => {

    // console.log(props);

    const dic = {
        nombre: 'Fernando',
        edad: 35
    };



  return (
    <>
      {
        // <code> {JSON.stringify(dic)}</code>
        // <h1>{ dic.nombre }</h1>
        // <h1>{getResult()}</h1>
        <h1>{title}</h1>
      }
      <p>{subtitle}</p>
    </>
  )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number,
}

FirstApp.defaultProps = {
    subtitle: 'soy un subtitulo'
}