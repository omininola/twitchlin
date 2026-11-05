import QtQuick

component Channel : QtObject {
    property string id
    property int platform
    property string platformId
    property string channelName
    property string channelImageUrl
    property bool isLive
    property Stream lastStream

    property int imageSize: 20
    property int imageRadius: 8

    Row {
        Rectangle {
            width: root.imageSize
            height: root.imageSize
            radius: root.imageRadius

            Image {
                anchors.fill: parent
                source: root.channelImageUrl
            }
        }

        Column {
            Text {
                text: root.channelName
            }

            Loader {
                active: root.isLive
                component: isLive
            }
            
            Component {
                id: isLive
                Text {
                    text: "Is Live!"
                }
            }

            Loader {
                active: !root.isLive
                component: lastStreamDate
            }

            Component {
                id: lastStreamDate
                Text {
                    text: "Last Stream: " + Qt.formatDate(root.lastStream.date, "dd/MM/yyyy")
                }
            }
        }
    }
}