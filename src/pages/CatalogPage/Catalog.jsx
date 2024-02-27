import { useEffect, useState } from 'react';
import CardItem from 'components/CardItem/CardItem';
import SelectForm from 'components/Select/Select';
import { getCars, getCarsByPage } from '../../redux/operations';
import { Loader } from 'components/Loader/Loader';
import { Wrapper, WrapperSelect, WrapperButton, Button, TextButton } from './Catalog.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectCars } from '../../redux/selectors';

export default function Catalog() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCarsByPage({ page: 1, limit: 12 }));
  }, [dispatch]);

  const cars = useSelector(selectCars);
  // const data = useSelector(selectCarsByPage(page));

  const [catalog, setCatalog] = useState([]);
  const { data, error, isLoading } = getCarsByPage(page);
  // const { data: allAdverts } = getCars();

  const [filters, setFilters] = useState({
    make: '',
    filteredPrices: [],
    minMileage: '',
    maxMileage: '',
  });
  const [filteredAdverts, setFilteredAdverts] = useState(null);
  const [isFiltering, setIsFiltering] = useState(false);

  const loadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (data) {
      setCatalog(prevCatalog => [...prevCatalog, ...data]);
    }
  }, [data]);

  useEffect(() => {
    if (isFiltering) {
      if (filters.make || filters.filteredPrices.length > 0 || filters.minMileage || filters.maxMileage) {
        const filteredAdverts = cars.filter(car => {
          if (filters.make && car.make !== filters.make.value) {
            return false;
          }
          if (
            filters.filteredPrices.length > 0 &&
            !filters.filteredPrices.some(priceObj => priceObj.value === car.rentalPrice.replace('$', ''))
          ) {
            return false;
          }
          if (filters.minMileage && car.mileage < filters.minMileage) {
            return false;
          }
          if (filters.maxMileage && car.mileage > filters.maxMileage) {
            return false;
          }
          return true;
        });

        setFilteredAdverts(filteredAdverts);
      } else {
        setFilteredAdverts(catalog);
        setIsFiltering(false);
      }
    }
  }, [filters, cars, isFiltering, catalog]);

  const makes = cars ? [...new Set(cars.map(car => car.make))] : [];
  const prices = cars ? [...new Set(cars.map(car => car.rentalPrice.replace('$', '')))] : [];
  const mileage = cars ? [...new Set(cars.map(car => car.mileage))] : [];
  const minMileage = Math.min(...mileage);
  const maxMileage = Math.max(...mileage);

  return (
    <>
      <WrapperSelect>
        <SelectForm
          makes={makes}
          prices={prices}
          minMileage={minMileage}
          maxMileage={maxMileage}
          onFilterChange={newFilters => {
            setFilters(newFilters);
            setIsFiltering(true);
          }}
          filters={filters}
        />
      </WrapperSelect>
      <Wrapper>
        {/* {cars.length > 0 ? cars.map((car, index) => <CardItem key={index} data={car} />) : null} */}
        {isFiltering ? (
          filteredAdverts !== null && filteredAdverts.length > 0 ? (
            filteredAdverts.map((car, index) => <CardItem key={index} data={car} />)
          ) : (
            <div>No results found for the selected criteria.</div>
          )
        ) : error ? (
          <>Oops, there was an error...</>
        ) : isLoading ? (
          <Loader />
        ) : catalog.length > 0 ? (
          catalog.map((car, index) => <CardItem key={index} data={car} />)
        ) : null}
      </Wrapper>
      <WrapperButton>
        {!isFiltering && data?.length >= 8 && (
          <Button type="button" onClick={loadMore}>
            <TextButton>Load more</TextButton>
          </Button>
        )}
        <Button type="button">
          <TextButton>Load more</TextButton>
        </Button>
      </WrapperButton>
    </>
  );
}
