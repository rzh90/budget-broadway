// card component for ticket information on "/tickets" page
function TicketInfoCard({ticketType, children}) {
    return (
        <>
            <div className="items-center bg-gray-800 border-gray-700 rounded-md p-4">
                <h2 className="text-lg font-bold text-white">{ticketType}</h2>
                <p className="text-sm">{children}</p>
            </div>
        </>
    )
}

export default TicketInfoCard