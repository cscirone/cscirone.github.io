import Button from '../components/button/Button';

function TestPage() {
    return (
        <div className="flex flex-col gap-2 p-10">
            <title>Christopher Scirone II</title>

            <div className="flex flex-row gap-2">
                <Button type="primary" text="Button" icon="fa-solid fa-plus"/>
                <Button type="outline" text="Button" icon="fa-solid fa-plus" />
            </div>
        </div>
    );
}

export default TestPage;