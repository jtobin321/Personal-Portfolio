import React from 'react';

import { Card, Button, IconSettings, Tooltip, Icon } from '@salesforce/design-system-react';
import { DataTable, DataTableColumn, Popover, Checkbox } from '@salesforce/design-system-react';

const items = [
    {
        id: '5GJOOkPWU7',
        name: 'Peter Jayawardena',
        email: 'peter.jayawardena@clipperdata.com'
    },
    {
        id: '5GJOOOPWU7',
        name: 'Jack Tobin',
        email: 'jtobin321@gmail.com'
    }
]

const AddSubscribers = () => {
    const [selections, setSelections] = React.useState(null);
    const [popoverIsOpen, setPopoverIsOpen] = React.useState(false);

    return (
        <div>
            <IconSettings iconPath="/icons">
            <Card
                heading={
                    <div style={{textAlign: "center", fontSize: "1.5em"}}>
                        <strong>Add Subscribers</strong>
                    </div>
                }
            >
                <div style={{padding: "10px"}}>
                <Card
                    style={{height: "50vh"}}
                    hasNoHeader={true}
                    className="slds-card_boundary"
                >
                    <div style={{padding: "10px"}}>
                    <DataTable
						fixedHeader
						fixedLayout
						items={items}
						id="DataTableExample-FixedHeaders"
						selection={selections}
						selectRows="checkbox"
					>
						<DataTableColumn label="Name" primaryColumn property="name" />
						<DataTableColumn label="Email" property="email" />
                        </DataTable>
                        </div>
                </Card>
                </div>
                <div class="slds-grid slds-grid_align-spread">
                    <div class="slds-col">
                    <Tooltip
                        id="tooltip"
                        align="top"
                        content="Upload CSV file. "
                    >
                        <div className="slds-file-selector slds-file-selector_files">
                        <input type="file" class="slds-file-selector__input slds-assistive-text" accept="image/png" id="file-upload-input-01" />
                        <label className="slds-file-selector__body" for="file-upload-input-01" id="file-selector-secondary-label">
                        <span className="slds-file-selector__button slds-button slds-button_neutral">
                        <Icon
							category="utility"
							name="upload"
							size="small"
						/>
          <span class="slds-file-selector__text slds-medium-show">Upload CSV</span></span>
                    </label>
                        </div>
                    </Tooltip>
                    </div>
                        <div class="slds-col">
                            <Popover
                                align="top"
                                isOpen={popoverIsOpen}
                                body={
                                    <div style={{height: "15vh", overflow: "auto"}}>
                                        <ul className="slds-p-left_large slds-p-top_xx-small">
						<li>
							<Checkbox
								assistiveText={{
									label: 'Global Crude Bundle',
								}}
								id="checkbox-mayonnaise"
								labels={{
									label: 'Global Crude Bundle',
								}}
							/>
						</li>
						<li>
							<Checkbox
								assistiveText={{
									label: 'US Crude Imports Data - Daily',
								}}
								id="checkbox-mustard"
								labels={{
									label: 'US Crude Imports Data - Daily',
								}}
							/>
						</li>
						<li>
							<Checkbox
								assistiveText={{
									label: 'Bangladesh Wheat - Weekly',
								}}
								id="checkbox-oil"
								labels={{
									label: 'Bangladesh Wheat - Weekly',
								}}
							/>
						</li>
						<li>
							<Checkbox
								assistiveText={{
									label: 'Global Oleffins API - Daily',
								}}
								id="checkbox-vinegar"
								labels={{
									label: 'Global Oleffins API - Daily',
								}}
							/>
						</li>
					</ul>
                                    </div>
                                }
                                footer={
                                    <div className="slds-text-align_right">
                                        <Button label="Cancel" onClick={() => setPopoverIsOpen(false)} />
                                        <Button
                                            variant="brand"
                                            label="Save"
                                            onClick={() => setPopoverIsOpen(false)}
                                        />
                                    </div>
                                }
                                heading="Products"
                                id="popover-controlled-with-footer"
                                onClose={() => setPopoverIsOpen(false)}
                                onRequestClose={() => setPopoverIsOpen(false)}
                            >
                                <Button label="Select Products" onClick={() => setPopoverIsOpen(true)} />
                            </Popover>
                        <Button variant="text-destructive" label="Clear Selections"/>
                    </div>
                </div>
            </Card>
            </IconSettings>
        </div>
    );
}

export default AddSubscribers;