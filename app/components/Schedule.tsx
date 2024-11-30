import { useTimezone } from "@/hooks/useTimezone";
import { Talk } from "./common/Talk";
import { Tag } from "./common/Tag";

export const Schedule = () => {
  return (
    <section className="w-full mx-auto max-w-sm md:max-w-6xl">
      <h2 className="text-center font-semibold text-[56px] text-hero ">
        Integrantes confirmados
      </h2>
      <span className="flex justify-center my-12 text-sm">
        <Tag>
          Los reales
        </Tag>
      </span>
      <div className="flex flex-col gap-16">
        <Talk
          title="Silvana la masomaniatica"
          author="Ingeniería civil"
          timestamp={1726864200000}
          img="https://cdn-icons-png.flaticon.com/512/12225/12225881.png"
          alt=""
        />
        <Talk
          title="Artica'S | Heidy mi amor no me dejes por ese feo :c"
          author="Ingeniería civil"
          timestamp={1726855200000}
          img="https://media-lim1-1.cdn.whatsapp.net/v/t61.24694-24/467367156_1937640660057407_7640439355038963123_n.jpg?ccb=11-4&oh=01_Q5AaIKQhKPG4kxBklQnX4dlshymSWDfuY8pEIF1fUjfy3gdf&oe=6754E8D8&_nc_sid=5e03e0&_nc_cat=109"
          alt="..."
        />
        <Talk
          title="André el terror de las nenas"
          author="Ingeniería de Sistemas"
          timestamp={1726864200000}
          img="https://media-lim1-1.cdn.whatsapp.net/v/t61.24694-24/454556134_1014243300401435_1523190090115422157_n.jpg?ccb=11-4&oh=01_Q5AaIFEueVIYAwnq9ugQ4UcTA-13qFmgR-lYhy1tEiZSx_4k&oe=67577D1B&_nc_sid=5e03e0&_nc_cat=101"
          alt=""
        />
        <Talk
          title="Miguel el chocolatero borracho"
          author="Mecatronica"
          timestamp={1726857000000}
          img="https://media-lim1-1.cdn.whatsapp.net/v/t61.24694-24/422417517_696674455784354_7317446918683865972_n.jpg?stp=dst-jpg_tt6&ccb=11-4&oh=01_Q5AaID0OuJkHUyr_pJbeBD9yrphWuuuQJmm2RZFv6qf1hihh&oe=67551259&_nc_sid=5e03e0&_nc_cat=100"
          alt=""
        />
        <Talk
          title="Emanuel el masomenos"
          author="Ingeniería civil"
          timestamp={1726857000000}
          img="https://cdn-icons-png.flaticon.com/512/12225/12225881.png"
          alt=""
        />
        <Talk
          title="Luis el gordo forro"
          author="Ingeniería de minas"
          timestamp={1726860600000}
          img="https://media-lim1-1.cdn.whatsapp.net/v/t61.24694-24/322992086_1063170625293181_2372288811996699189_n.jpg?stp=dst-jpg_tt6&ccb=11-4&oh=01_Q5AaID2Zedl4kYw1DZ_fBLuZm2A_hP-ZH12EAGp_axOB7rzF&oe=6754E12F&_nc_sid=5e03e0&_nc_cat=104"
          alt=""
        />
        <Talk
          title="Omar nooooooooooooooooooooooo"
          author="Mecatronica"
          timestamp={1726862400000}
          img="https://media-lim1-1.cdn.whatsapp.net/v/t61.24694-24/136916899_300690511435321_4842089814675614373_n.jpg?ccb=11-4&oh=01_Q5AaIB7z21skhmX6o68uORg32PkRdZL2KqNE3bdMtDX11r_2&oe=674F76FE&_nc_sid=5e03e0&_nc_cat=103"
          alt=""
        />
        <Talk
          title="Michael go Break?"
          author="Empresarial"
          timestamp={1726864200000}
          img="https://media-lim1-1.cdn.whatsapp.net/v/t61.24694-24/441297038_1118886526907371_3064693634473120051_n.jpg?ccb=11-4&oh=01_Q5AaIPEPCQb3iTSPPw3q_TgtD_SCTpYHDiv2qr3ue456IOSY&oe=6754EC91&_nc_sid=5e03e0&_nc_cat=101"
          alt=""
        />
        <Talk
          title="Styven milagros en tu puerta"
          author="Minas"
          timestamp={1726864200000}
          img="https://media-lim1-1.cdn.whatsapp.net/v/t61.24694-24/467430092_1033664921777715_4303324759867054776_n.jpg?ccb=11-4&oh=01_Q5AaIJ7jZEjLolVqrFy1heZg7Mkm4CSu0jHG7PmRLgBHCYFa&oe=6754F96D&_nc_sid=5e03e0&_nc_cat=107"
          alt=""
        />
      </div>
    </section>
  );
};
