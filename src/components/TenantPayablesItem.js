import React from 'react'

const TenantPayablesItem = ({title, time, date}) => {
        return (
          <div>
            <ul className="sortable-list connectList agile-list ui-sortable pb-0" id="todo">
            <li class="danger-element cursorauto">
                <div class="agile-detail">
                    <small class="text-danger"><i class="fas fa-bell"></i> {time} {date}</small>
                </div>
                <p class="m-0 text-truncate">{title}</p>
            </li>
            </ul>
          </div>
        );
}

export default TenantPayablesItem;
