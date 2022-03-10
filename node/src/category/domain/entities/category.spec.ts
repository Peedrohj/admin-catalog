// Utils
import { validate as uuidValidae } from "uuid"

// Entities
import UniqueEntityId from "../../../@seedwork/domain/unique-entity-id"
import Category, { CategoryProps } from "./category"

describe("Category Unit Tests", () => {

    test("Create a complete category", () => {
        const props: CategoryProps = {
            name: "Movie",
            description: "description",
            is_active: true,
            created_at: new Date()
        }

        const category = new Category({ ...props })

        expect(category.props).toStrictEqual(props)
    })

    test("Create category with just a name", () => {
        const props: CategoryProps = {
            name: "Movie",
        }

        const category = new Category({ ...props })

        expect(category.props).toMatchObject(props)
        expect(category.props.description).toBeNull()
        expect(category.props.is_active).toBeTruthy()
        expect(category.props.created_at).toBeInstanceOf(Date)
    })

    test("Create category with name and description", () => {
        const props: CategoryProps = {
            name: "Movie",
            description: "description",
        }

        const category = new Category({ ...props })

        expect(category.props).toMatchObject(props)
    })

    test("Create category with name and is_active", () => {
        const props: CategoryProps = {
            name: "Movie",
            is_active: false,
        }

        const category = new Category({ ...props })

        expect(category.props).toMatchObject(props)
    })

    test("Created_at creation", () => {
        const props: CategoryProps = {
            name: "Movie",
        }

        const category = new Category({ ...props })

        expect(category.props.created_at).toBeInstanceOf(Date)
    })

    test("Id field creation", () => {
        const props: CategoryProps = {
            name: "Movie",
        }
        const uuid: string = "382701ee-55e2-44fa-a799-426e594181b2"

        const testData = [
            { props },
            { props, id: null },
            { props, id: undefined },
            { props, id: new UniqueEntityId(uuid) },
        ]

        testData.forEach(data => {
            const category = new Category({ ...data.props }, data.id as any)
            expect(category.id).not.toBeNull()
            expect(category.id).toBeInstanceOf(UniqueEntityId)

        })
    })
})