import LogoSvg from "../assets/BorrowinWhiteLogo.svg";

export default function BorrowinWhiteLogo(
    {width ,height}: {width: string, height: string}
) {

    return <div className="flex items-center">
        <div className={`rounded-full`}>
            <img src={LogoSvg} alt="" style={{ width: `${width}px`, height: `${height}px` }}/>
        </div>
    </div>

}