import { CheckTree } from "rsuite"

export default function Filter({onFilterChange}){

    const data = [
        {
            label: 'All',
            value: 'all',
            children: [
                {label: 'Live Shows', value:'live-shows'},
                {label: 'Markets', value:'markets'},
                {label: 'Sports', value:'sports'},
                {label: 'Parties/Going out', value:'parties'},
                {label: 'On Campus' , value: 'on-campus'},                   
            ]
        }
    ]


    const handleChange = (selectedValues) => {
        console.log("Selected values:", selectedValues);
        if (onFilterChange) {
            onFilterChange(selectedValues);
        } else {
            console.error("yuh ay yuh ayyyyy");
        }
    };
    



    return<>
    
    <CheckTree 
    
    onChange={handleChange} 
    className="filter" 
    data={data} 
    height="fit-content"
    defaultExpandAll 
    cascade='true'
    />
    
    </>

}