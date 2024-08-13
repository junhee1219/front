interface MyComponentProps {
    title: string;
    description?: string;
}

const MyComponent = ({ title, description }: MyComponentProps) => {
    return (
        <div>
            <h1>{title}</h1>
            {description && <p>{description}</p>}
        </div>
    );
};

export default MyComponent;
