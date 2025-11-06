import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Welcome from "@/components/Welcome";
import ApearianceBlock from "@/components/ApearianceBlock";

export default async function page({ params }: any) {
  const { locale } = await params

  return (
    // <div>
    <div className="overflow-hidden">
      <ApearianceBlock pos={[{ y: -25 }, { y: 0 }]}>
        <div className="container pt-[57px] max-425px:pt-[25px]">
          <Header />
        </div>
      </ApearianceBlock>
      {/* <main className="flex flex-col gap-[150px] my-[150px] max-1000px:overflow-hidden max-600px:my-[80px] max-600px:gap-[80px]"> */}
      <main className="flex flex-col gap-[150px] my-[150px] max-600px:my-[80px] max-600px:gap-[80px]">
        <Welcome />
        <ApearianceBlock pos={[{ y: 50 }, { y: 0 }]}>
          <Services locale={locale} />
        </ApearianceBlock>
        <ApearianceBlock pos={[{ y: 50 }, { y: 0 }]}>
          <AboutMe />
        </ApearianceBlock>
        <ApearianceBlock pos={[{ y: 50 }, { y: 0 }]}>
          <Skills />
        </ApearianceBlock>
        <Portfolio />
      </main>
      <ApearianceBlock pos={[{}, {}]}>
        <Footer />
      </ApearianceBlock>
    </div>
  )
}