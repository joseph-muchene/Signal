
interface Prop {

    value: {
        level: string,
        length: number
    }

}

export default function AlertLevel({ value }: Prop) {
    return (
        <div className="w-64 mx-auto bg-white  shadow-lg p-6 rounded">

            <div className="flex items-center">
                <span className="text-xl mr-2">
                    Number of Cases:
                </span>
                <span className="text-2xl font-semibold">
                    {value.length}
                </span>
            </div>

            <div className="mt-4">
                <span className="text-lg font-semibold">Danger Level:</span>
                <span className="text-lg font-semibold text-{{ dangerLevelColor(dangerLevel) }}">
                    {value.level}
                </span>
            </div>
        </div>

    )
}
