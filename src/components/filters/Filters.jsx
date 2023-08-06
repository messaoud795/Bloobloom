import React, { useEffect, useState } from 'react';
import './Filters.css';
import { coloursFilters, shapesFilters } from '../../constants/filterConstants';
import { includes, isEmpty, isEqual } from 'lodash';
import { useDispatch } from 'react-redux';
import { getGlasses } from '../../actions/glassesActions';
import CloseIcon from '../../icons/CloseIcon';
import { arePropsEqual, getScreenWidth } from '../../utils/utils';
import usePrevious from '../../utils/previousState';
import { useParams } from 'react-router-dom';
import PlusIcon from '../../icons/PlusIcon';

const Filters = ({ page }) => {
  const [selectedColours, setSelectedColours] = useState([]);
  const [selectedshapes, setSelectedShapes] = useState([]);
  const [colorsVisible, setColorsVisible] = useState(false);
  const [shapesVisible, setShapesVisible] = useState(false);
  const dispatch = useDispatch();
  const { collectionType } = useParams();
  const prevSelectedColours = usePrevious(selectedColours);
  const prevSelectedShapes = usePrevious(selectedshapes);
  const prevCollectionType = usePrevious(collectionType);
  const [isScreenSmall, setIsScreenSmall] = useState(getScreenWidth() < 1300);

  const displaySelectedFilters =
    !isEmpty(selectedColours) || !isEmpty(selectedshapes);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsScreenSmall(getScreenWidth() < 1300);
    });
    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, []);

  useEffect(() => {
    const areFiltersChanged = !(
      isEqual(prevSelectedColours, selectedColours) &&
      isEqual(prevSelectedShapes, selectedshapes) &&
      isEqual(prevCollectionType, collectionType)
    );
    dispatch(
      getGlasses(
        collectionType,
        page,
        selectedColours,
        selectedshapes,
        areFiltersChanged
      )
    );
  }, [
    page,
    dispatch,
    selectedColours,
    selectedshapes,
    prevSelectedColours,
    prevSelectedShapes,
    collectionType,
    prevCollectionType,
  ]);

  const FilterClickHandler = (filter, group, setterFct) => {
    //verify if the filter exists already in the selected filter
    const isFilterSelected = includes(group, filter);
    // remove the filter if exists, else add it
    const newGroup = isFilterSelected
      ? group.filter(el => el !== filter)
      : [...group, filter];
    setterFct(newGroup);
  };

  const handleColorFilterClick = () => {
    if (!isScreenSmall) setShapesVisible(!colorsVisible);
    setColorsVisible(colorsVisible => !colorsVisible);
  };

  const handleShapeFilterClick = () => {
    if (!isScreenSmall) setColorsVisible(!shapesVisible);
    setShapesVisible(shapesVisible => !shapesVisible);
  };
  return (
    <div>
      <div className='filters'>
        <div className='filters-header'>
          <div className='filters-part' id='filters-header-first-section'></div>
          <div className='filters-part' id='filters-header-second-section'>
            <span className='title'>{collectionType.replace('-', ' ')}</span>
          </div>
          {(colorsVisible || shapesVisible) && (
            <div
              className='filters-part'
              id='filters-header-third-section'
            ></div>
          )}
        </div>

        <div className='filters-section'>
          <div className='filter-section'>
            <div className='filter' onClick={handleColorFilterClick}>
              <span>colour</span>
              <span className='filter-icon'>
                {isScreenSmall && (
                  <>{colorsVisible ? <CloseIcon /> : <PlusIcon />}</>
                )}
              </span>
            </div>
            {colorsVisible && (
              <div className='colours'>
                {Object.keys(coloursFilters).map(colour => (
                  <div
                    className='color'
                    key={colour}
                    onClick={() =>
                      FilterClickHandler(
                        colour,
                        selectedColours,
                        setSelectedColours
                      )
                    }
                  >
                    <img
                      className='color-preview'
                      src={coloursFilters[colour]}
                      alt='color preview'
                    />
                    <span className='color-name'>{colour}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className='filter-section'>
            <div className='filter' onClick={handleShapeFilterClick}>
              <span>shape</span>
              {isScreenSmall && (
                <>{shapesVisible ? <CloseIcon /> : <PlusIcon />}</>
              )}
            </div>
            {shapesVisible && (
              <div className='shapes'>
                {shapesFilters.map(shape => (
                  <span
                    key={shape}
                    className='shape'
                    onClick={() =>
                      FilterClickHandler(
                        shape,
                        selectedshapes,
                        setSelectedShapes
                      )
                    }
                  >
                    {shape}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {displaySelectedFilters && (shapesVisible || colorsVisible) && (
        <div className='selected-filters'>
          {selectedColours.map(selectedColour => (
            <div className='selected-filter' key={selectedColour}>
              <span>{selectedColour}</span>
              <span
                className='close-icon'
                onClick={() => {
                  FilterClickHandler(
                    selectedColour,
                    selectedColours,
                    setSelectedColours
                  );
                }}
              >
                <CloseIcon />
              </span>
            </div>
          ))}
          {selectedshapes.map(selectedShape => (
            <div className='selected-filter' key={selectedShape}>
              <span>{selectedShape}</span>
              <span
                onClick={() => {
                  FilterClickHandler(
                    selectedShape,
                    selectedshapes,
                    setSelectedShapes
                  );
                }}
                className='close-icon'
              >
                <CloseIcon />
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default React.memo(Filters, arePropsEqual);
