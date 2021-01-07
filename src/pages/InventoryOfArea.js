import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { AppContext } from "../context/settings";
import { filterInventory } from "../utils/landlordHelper";
import InventoryAreaFilter from "../components/InventoryAreaFilter";
import Loading from "../components/static/Loading";

export default function InventoryOfArea() {
  var t = useParams();
  var area = t.area || null;
  const [inventoryOf, set_inventoryOf] = React.useState("CheckIn");
  const [items, set_items] = React.useState(null);
  const [isLoading, set_isLoading] = React.useState(null);

  var appContext = React.useContext(AppContext);
  const activeUnitId = appContext.settings.activeUnitId;
  var storedInventoryItems = appContext.settings.inventoryData || null;

  React.useEffect(() => {
    console.log("redraw");
    set_isLoading(true);

    var it = filterInventory(area, inventoryOf, storedInventoryItems);
    if (!it) set_items(null);

    set_items(it);
    set_isLoading(false);
    // eslint-disable-next-line
  }, [activeUnitId]);

  if (!area) {
    return <Redirect to="/landlord/unitInventory" />;
  }

  function updateFilter(newInventoryOf) {
    var it = filterInventory(area, newInventoryOf, storedInventoryItems);
    if (!it) set_items(null);

    set_items(it);
    set_inventoryOf(newInventoryOf);
    console.log("update filter with ", it.length);
  }

  return isLoading === true ? (
    <Loading />
  ) : (
    <div className="wrapper wrapper-content animated fadeInRight py-5 pb-5">
      <div className="row p-0 justify-content-center pb-0">
            <div className="col-lg-5 px-2">
              <InventoryAreaFilter updateFilter={updateFilter} selectedFilter={inventoryOf} />
              <br />
            </div>
          </div>
      <div className="row justify-content-center">
      <div className="col-10 mb-3">
      <div className="row">
      {items &&
              items.map((item, name) => {
                return (
                  
        <div className="col-6 px-0 mb-3">
          <div className="container container-xs">
                  <div key={name} className="ibox-content minhigh mb-2">
                    <div className="row mb-4 pt-3">
                      <div className="col-md-12">
                        <div className="media">
                          <div className="media-body">
                            <div className="col-2 float-right">
                              <h4 className="text-doorcase3">Quantity</h4>
                              <p className="m-0">
                                {item.quantity}
                                {item.markAddition === true ? <span className="m-0">+</span> : ""}
                                {item.markOmission === true ? <span className="m-0">-</span> : ""}
                              </p>
                            </div>
                            <h4 className="text-doorcase3">Item Name</h4>
                            <p className="m-0">{item.itemName}</p>
                            <hr />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <div className="demo-gallery">
                          <ul id="lightgallery" className="list-unstyled row">
                            <img src={item.urlPhoto} alt="123" />
                          </ul>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="row mb-4">
                      <div className="col-md-12">
                        <div className="media">
                          <div className="media-body">
                            <h4 className="text-doorcase3">Model Number</h4>
                            <p className="m-0">{item.itemModel}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                
          </div>
        </div>
        
        );
      })}
      </div>
      </div>
      </div>
    </div>
  );
}
