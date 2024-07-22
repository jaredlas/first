import styles from "@/app/Animation3d.module.css"
export default function slider({items}:{items:any}){
    return(
        <div className="w-[100%] h-[100vh] text-center overflow-hidden relative ">
            <div className=" absolute w-[200px] h-[250px] top-[10%] left-[calc(50%-100px)] ">
                <div className="absolute inset-[0 0 0 0]">
                    <div className="w-[100%] h-[100%] object-cover">
                        <div>hello</div>
                        <div>hello</div>
                        <div>hello</div>
                    </div>
                </div>
            </div>
        </div>
    )
}