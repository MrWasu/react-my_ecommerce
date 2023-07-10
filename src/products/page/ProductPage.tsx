import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { ProductPageProps } from '../types/ProductTypes';
import { Header } from '../../ui/components/header/Header';
import { Navbar } from '../../ui/components/navbar/Navbar';
import { Footer } from '../../ui/components/footer/Footer';
import { SideBar } from '../../ui/components/sidebar/SideBar';

export const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
    const { name, description, price, image } = product;
    const drawerWidth = 240;

    const cardStyles = {
        maxWidth: 400,
        margin: '0 auto',
        marginTop: 50,
    };

    const mediaStyles = {
        height: 0,
        paddingTop: '56.25%', // Proporción de 16:9
    };

    return (
        <>
            <Header />
            <Navbar />
            <div style={{ display: 'flex' }}>
                <div>
                    <SideBar />
                </div>

                <div className="content">
                    <h1>ProductPage page</h1>
                    <Card style={cardStyles}>
                        <CardMedia style={mediaStyles} image={image} title={name} />
                        <CardContent>
                            <Typography variant="h6" component="h2" gutterBottom>
                                {name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {description}
                            </Typography>
                            <Typography variant="body1" component="p">
                                Price: ${price}
                            </Typography>
                        </CardContent>
                    </Card>

                </div>
            </div>
            <Footer />
        </>
    );
};
