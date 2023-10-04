import { Triangle } from "react-loader-spinner";


export default function Loading() {
    return (
        <div>
            <div className="flex justify-center items-center mt-4">
                <Triangle
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="triangle-loading"
                    wrapperStyle={{}}
                    visible={true}
                />
            </div>
        </div>
    )
}
