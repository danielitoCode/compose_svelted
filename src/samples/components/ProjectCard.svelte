<script lang="ts">
    import {
        Alignment,
        Arrangement, Button,
        ColorScheme,
        Column, Image,
        Modifier,
        RoundedCornerShape,
        Row,
        Surface,
        Text,
        TextStyle
    } from "../../../dist";

    export let title: string;
    export let description: string;
    export let image: string;
</script>

<Surface
        color={ColorScheme.Surface}
        modifier={Modifier
        .weight(1)
        .clip(RoundedCornerShape(20))
    }
>
    <Column>
        <!-- Image -->
        <Image
                painter={image}
                contentDescription={title}
                modifier={Modifier
                .fillMaxWidth()
                .height(180)
            }
        />

        <!-- Content -->
        <Column
                modifier={Modifier.padding(16)}
                verticalArrangement={Arrangement.spacedBy(8)}
        >
            <Text textStyle={TextStyle.TitleMedium}>
                {title}
            </Text>

            <Text textStyle={TextStyle.BodyMedium}>
                {description}
            </Text>

            <Row
                    horizontalArrangement={Arrangement.SpaceBetween}
                    verticalAlignment={Alignment.CenterVertically}
            >
                <Text textStyle={TextStyle.LabelSmall}>
                    Demo project
                </Text>

                <Button>
                    View
                </Button>
            </Row>
        </Column>
    </Column>
</Surface>