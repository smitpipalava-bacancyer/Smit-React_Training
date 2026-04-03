import { Card } from "./Card";

export function RenderData({ data }) {
    return (
        <>
            {!data ?
                <h2>Loading ...</h2>
                : data.length === 0 ?
                    <h2> No Products Found!! ...</h2>
                    :
                    data.map((element) => {
                        return <Card key={element.id} props={element} id={element.id} />
                    })
            }
        </>
    )
}