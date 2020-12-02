//TASK under Review
import React from "react";
import Empty from "../components/Empty";
import InfoPropertyDetailsItems from "./InfoPropertyDetailsItems";


const InfoPropertyDetails = () => {
  return (
    <div className="ibox">
        <div className="ibox-title">
            <h3>Faciities &amp; Amenities</h3>
        </div>
        <div class="ibox-content">
            <div class="row mb-5">
                <div class="col-md-4 p-0 col-12">
                    <ul class="folder-list" >
                        <li class="py-3"><i class="fas fa-door-open"></i> 24 hours security</li>
                        <li class="py-3"><i class="fas fa-utensils"></i> Barbeque area</li>
                        <li class="py-3"><i class="fas fa-mitten"></i> Changing room</li>
                        <li class="py-3"><i class="fas fa-border-style"></i> Children's playground</li>
                        <li class="py-3"><i class="fas fa-toilet-paper"></i> Covered car park</li>
                        <li class="py-3"><i class="fas fa-toilet-paper"></i> Function hall</li>
                    </ul>
                </div>
                <div class="col-md-4 p-0 col-12">
                    <ul class="folder-list" >
                        <li class="py-3"><i class="fas fa-seedling"></i> Function hall</li>
                        <li class="py-3"><i class="fas fa-couch"></i> Games room</li>
                        <li class="py-3"><i class="fas fa-bed"></i> Gymnasium</li>
                        <li class="py-3"><i class="fas fa-shower"></i> Infinity pool</li>
                        <li class="py-3"><i class="fas fa-bed"></i> Landscaped garden</li>
                        <li class="py-3"><i class="fas fa-bed"></i> Wading pool</li>
                    </ul>
                </div>
                <div class="col-md-4 p-0 col-12">
                    <ul class="folder-list">
                        <li class="py-3"><i class="fas fa-bath"></i> Lap pool</li>
                        <li class="py-3"><i class="fas fa-bed"></i> Lounge area</li>
                        <li class="py-3"><i class="fas fa-dungeon"></i> Qigong / Yoga area</li>
                        <li class="py-3"><i class="fas fa-infinity"></i> Reflexology path</li>
                        <li class="py-3"><i class="fas fa-infinity"></i> Sauna and Steam</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
};

export default InfoPropertyDetails;
