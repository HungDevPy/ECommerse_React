import { dataInfor } from "@components/Infor/constants"
import InforCard from "@components/Infor/InforCard/InforCard"
import MainLayout from "@components/Layout/Layout"

function Infor() {
  return<div>
    <MainLayout>
        <div>
            {dataInfor.map((item) =>{
                return <InforCard/>;
            })}
        </div>
    </MainLayout>
  </div>
}

export default Infor