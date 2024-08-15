export default function TotalPresent(props) {
    return (
        <div className="flex flex-col flex-grow basis-64 w-full bg-primary rounded-lg p-3">
            <h1 className="text-lg font-medium flex justify-between items-center hover:text-secondary">{props.title ? props.title : 'Default Title'} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="h-6 w-6 group-hover:text-secondary" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
            </svg></h1>
            <div className="text-5xl p-3 flex flex-row items-baseline text-accent">{props.present ? props.present : '0'}<h2 className="flex flex-row text-base">{`/ ${props.total ? props.total : '0'} present`}</h2></div>

        </div>
    )
}