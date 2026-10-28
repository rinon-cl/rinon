import Image from "next/image";
import Link from "next/link";
import {getMattressSize, mattressModels, mattressSizes} from "@/lib/mattresses";

export function MattressCatalog() {
  return <>
    <section className="v2-solution-section soft rinon-mattress-catalog" aria-labelledby="colchones-modelos">
      <div className="container">
        <div className="section-head">
          <div><div className="v2-eyebrow">CATÁLOGO RINON</div><h2 id="colchones-modelos">Nueve configuraciones para comparar.</h2></div>
          <p>Compara tecnología, altura, capas y formatos disponibles. Las imágenes son visualizaciones conceptuales; existencia, terminación y medida final se confirman en la cotización.</p>
        </div>
        <div className="rinon-mattress-models">
          {mattressModels.map((model, index) => <article key={model.id} id={model.id} className="rinon-mattress-model">
            <figure data-visual-provenance="conceptual">
              <Image src={model.image} alt={model.imageAlt} fill sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw" unoptimized/>
              <figcaption>Visualización conceptual</figcaption>
            </figure>
            <div className="rinon-mattress-model-body">
              <div className="rinon-mattress-model-index"><span>{String(index + 1).padStart(2, "0")}</span><small>{model.family}</small></div>
              <h3>{model.name}</h3>
              <p>{model.summary}</p>
              <dl>
                <div><dt>Tecnología</dt><dd>{model.technology}</dd></div>
                <div><dt>Altura</dt><dd>{model.heightCm ? `${model.heightCm} cm` : "A definir"}</dd></div>
                <div><dt>Confort</dt><dd>{model.comfort}</dd></div>
                <div><dt>Firmeza</dt><dd>{model.firmness}</dd></div>
                <div><dt>Uso</dt><dd>{model.reversible === true ? "Reversible" : "A confirmar"}</dd></div>
              </dl>
              <div className="rinon-mattress-layers"><strong>Composición</strong><ul>{model.construction.map((layer) => <li key={layer}>{layer}</li>)}</ul></div>
              <div className="rinon-mattress-sizes"><strong>Formatos</strong><ul>{model.sizes.map((sizeId) => {const size = getMattressSize(sizeId); return size ? <li key={size.id}>{size.name}</li> : null;})}</ul></div>
              <Link className="rinon-mattress-quote" href={`/cotizar?category=colchones&detail=${encodeURIComponent(model.id)}`} data-event="quote_start" data-cta-location="mattress_model" data-quote-category="colchones">Cotizar este modelo</Link>
            </div>
          </article>)}
        </div>
      </div>
    </section>
    <section className="v2-solution-section rinon-mattress-size-guide" aria-labelledby="colchones-medidas">
      <div className="container">
        <div className="section-head">
          <div><div className="v2-eyebrow">GUÍA DE TAMAÑOS</div><h2 id="colchones-medidas">Medidas nominales del catálogo.</h2></div>
          <p>Úsalas como referencia inicial. Antes de comprar, mide el interior útil de la cama o base y confirma la dimensión del modelo cotizado.</p>
        </div>
        <div className="rinon-mattress-size-table" role="table" aria-label="Medidas nominales de colchones">
          {mattressSizes.map((size) => <div role="row" key={size.id}><strong role="cell">{size.name}</strong><span role="cell">{size.dimensions}</span></div>)}
        </div>
      </div>
    </section>
  </>;
}
