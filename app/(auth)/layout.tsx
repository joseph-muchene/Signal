


export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex justify-center items-center h-full w-full mt-4">
            {children}
        </div>
    )
}