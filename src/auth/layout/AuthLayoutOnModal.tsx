import { Grid, Typography } from '@mui/material';
import { SideBar } from '../../ui/components/sidebar/SideBar';


export const AuthLayoutOnModal = ({ children, title = '' }: any) => {

  const backgroundImage = ''
  // Se encarga del estilo de login y registerPage
  return (

    <>
      <Grid
        className='animate__animated animate__fadeIn animate__faster'
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >

        <Grid item
          className='box-shadow'
          xs={3}
          sx={{
            width: { sm: 350 },
            backgroundColor: 'white',
            padding: 2,
            borderRadius: 2
          }}>

          <Typography variant='h5' sx={{ mb: 1 }}>{title}</Typography>

          {children}

        </Grid>

      </Grid>
    </>

  )
}