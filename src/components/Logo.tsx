import LogoSvg from "../assets/latestLogo.svg";

export default function BorrowinLogo(
    {width ,height}: {width: string, height: string}
) {

    return <div className="flex items-center">
        <div className={`rounded-full`}>
            <img src={LogoSvg} alt="" style={{ width: `${width}px`, height: `${height}px` }}/>
        </div>
    </div>

}