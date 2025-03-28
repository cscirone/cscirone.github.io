function TabContainer({ children, className }) {
    return (
        <div className={`flex flex-row gap-6 flex-1 ${className}`}>
            {children}
        </div>
    );
}

export default TabContainer;