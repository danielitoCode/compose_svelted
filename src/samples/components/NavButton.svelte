<script lang="ts">
    import {Alignment, Arrangement, Button, ColorScheme, Icon, Modifier, Row, Spacer, Text, TextStyle} from "../../../dist";

    export let onClick: () => void = () => {};
    export let painter: string = "";
    export let text: string = "";
    export let modifier: Modifier = Modifier.empty()
</script>
<Button
    elevation="level2"
    modifier={modifier.fillMaxWidth()}
    onClick={onClick}
>
    <Row
        modifier={modifier.fillMaxWidth()}
        horizontalArrangement={Arrangement.Start}
        verticalAlignment={Alignment.CenterVertically}
    >
        <Icon
            tint={ColorScheme.OnPrimary}
            painter={painter}
            modifier={Modifier.size(25)}
        />
        <Spacer modifier={Modifier.width(10)}/>
        <Text color={ColorScheme.OnPrimary} textStyle={TextStyle.BodyLarge}>{text}</Text>
    </Row>
</Button>