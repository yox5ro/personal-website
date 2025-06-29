import H2 from "@/components/h2";
import Li from "@/components/li";
import Link from "@/components/link";

export default function Profile() {
	return (
		<div className="font-sans font-medium flex justify-center bg-gradient-to-r from-gray-50 to-gray-400 min-h-screen items-center px-8 py-16 tracking-wider">
			<div className="lg:w-1/2 md:w-3/4">
				<div className="flex flex-col items-center">
					<h1 className="text-3xl font-extrabold">Yoshihiro Koyama</h1>
				</div>
				<div>
					<H2 title="Work Experiences" className="mt-16" />
					<ul>
						<Li>Software Engineer at a company, full-time, 2025-</Li>
						<Li>Software Engineer at Digeon Inc., part-time, 2021-2025</Li>
					</ul>
					<H2 title="Educations" className="mt-8" />
					<ul>
						<Li>
							Master of Agricultural Science at Kobe University, 2023-2025
						</Li>
						<Li>
							Bachelor of Agricultural Science at Kobe University, 2019-2023
						</Li>
					</ul>
					<H2 title="Peer reviewed publications" className="mt-8" />
					<ul>
						<Li className="mt-2">
							<b>Koyama, Y.</b>, Nasu, M., & Matsuoka, Y. (2025). <i>f</i>
							<sub>4</sub>-statistics-based ancestry profiling and convolutional
							neural network phenotyping shed new light on the structure of
							genetic and spike shape diversity in <i>Aegilops tauschii</i>{" "}
							Coss. <i>Proceedings of the Japan Academy, Series B</i>.{" "}
							<a
								className="hover:opacity-60 underline"
								href="	https://doi.org/10.2183/pjab.101.023"
							>
								https://doi.org/10.2183/pjab.101.023
							</a>
						</Li>
						<Li className="mt-2">
							<b>Koyama, Y.</b>, Tanaka, H., Sato, K., Tsujimoto H., Matsuoka,
							Y. (2025). Accessions of the genetically distinct TauL3 lineage of{" "}
							<i>Aegilops tauschii</i> Coss. from newly identified habitats in
							Armenia, Azerbaijan, and Iran.{" "}
							<i>Genetic Resources and Crop Evolution</i>.{" "}
							<a
								className="hover:opacity-60 underline"
								href="https://doi.org/10.1007/s10722-025-02438-4"
							>
								https://doi.org/10.1007/s10722-025-02438-4
							</a>
						</Li>
					</ul>
					<H2 title="Links" className="mt-8" />
					<ul className="flex flex-col">
						<Li>
							<Link href="https://github.com/yox5ro" serviceName="GitHub" />
						</Li>
						<Li>
							<Link href="https://x.com/yox5ro" serviceName="X" />
						</Li>
						<Li>
							<Link
								href="https://www.linkedin.com/in/yox5ro/"
								serviceName="Linkedin"
							/>
						</Li>
					</ul>
				</div>
			</div>
		</div>
	);
}
