import { Text, Image } from 'react-native';

interface IProps {
    castTimeValue: string;
}

function CastTime(props: IProps) {
    if (props.castTimeValue === '1') {
        return (
            <Image
                source={require('../images/1ActionIcon.png')}
                style={{ height: 18, width: 18 }}
            />
        );
    }
    if (props.castTimeValue === '2') {
        return (
            <Image
                source={require('../images/2ActionIcon.png')}
                style={{ height: 18, width: 28 }}
            />
        );
    }
    if (props.castTimeValue === '3') {
        return (
            <Image
                source={require('../images/3ActionIcon.png')}
                style={{ height: 18, width: 37 }}
            />
        );
    }
    if (props.castTimeValue.toLowerCase() === 'reaction') {
        return (
            <Image
                source={require('../images/reactionIcon.png')}
                style={{ height: 18, width: 18 }}
            />
        );
    }
    if (props.castTimeValue === '1 or 2') {
        return (
            <>
                <Image
                    source={require('../images/1ActionIcon.png')}
                    style={{ height: 18, width: 18 }}
                />
                <Text> or </Text>
                <Image
                    source={require('../images/2ActionIcon.png')}
                    style={{ height: 18, width: 28 }}
                />
            </>
        );
    }
    if (props.castTimeValue === '1 to 3') {
        return (
            <>
                <Image
                    source={require('../images/1ActionIcon.png')}
                    style={{ height: 18, width: 18 }}
                />
                <Text> to </Text>
                <Image
                    source={require('../images/3ActionIcon.png')}
                    style={{ height: 18, width: 37 }}
                />
            </>
        );
    }
    return <Text>{props.castTimeValue}</Text>;
}

export { CastTime };
