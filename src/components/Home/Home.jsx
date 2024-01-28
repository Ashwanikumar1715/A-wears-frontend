import { useEffect } from 'react';
import Categories from '../Layouts/Categories';
import Banner from './Banner/Banner';
import DealSlider from './DealSlider/DealSlider';
import ProductSlider from './ProductSlider/ProductSlider';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, getSliderProducts } from '../../actions/productAction';
import { useSnackbar } from 'notistack';
import MetaData from '../Layouts/MetaData';
import { Mens_section } from '../../utils/data/mens_section';
import { offerProducts } from '../../utils/constants';
import { Women_section } from '../../utils/data/womens_section';
import { mensShoesPage } from '../../utils/data/shoes';
import offer from '../../assets/images/offer.png'
const Home = () => {

  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const { error, loading } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: "error" });
      dispatch(clearErrors());
    }
    dispatch(getSliderProducts());
  }, [dispatch, error, enqueueSnackbar]);

  return (
    <>
      <MetaData title="Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!" />
      <Categories />
      <main className="flex flex-col gap-3 px-2 mt-16 sm:mt-2">
        <Banner />
        <DealSlider title=" Heavy discount on mens clothings" data={Mens_section}/>
        {!loading && <ProductSlider title={"Suggested for You"} tagline={"Based on Your Activity"} />}
        <DealSlider title="Top Brands, Best Price" data={Women_section}/>
        {!loading && <ProductSlider title={"You May Also Like..."} tagline={"Based on Your Interest"} />}
        <div className="h-32 sm:h-[25rem] w-full rounded-sm shadow relative overflow-hidden">
            <img draggable="false" className="h-32 sm:h-[25rem] w-full object-cover" src={offer} alt="banner" />
      </div>
        <DealSlider title="Top Offers On" data={offerProducts} />
        {!loading && <ProductSlider title={"Don't Miss These!"} tagline={"Inspired by your order"} />}
        <DealSlider title="Top Offers On Shoes" data={mensShoesPage} />
      </main>
    </>
  );
};

export default Home;
