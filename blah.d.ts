
declare class ActiveObject {


  active : Boolean

    readonly effectiveActive : Boolean


}

declare class Alert {
  show(callback: Function|null) : Promise<Number>

   addOption(string: String)




}

declare class Application {
  openDocument(from: Document|null, url: URL, completed: Function)


  readonly buildVersion : Version

    readonly commandKeyDown : Boolean

    readonly controlKeyDown : Boolean

    readonly name : String

    readonly optionKeyDown : Boolean

    readonly platformName : String

    readonly shiftKeyDown : Boolean

    readonly userVersion : Version

    readonly version : String


}

declare class ApplyResult {



  static readonly SkipChildren : ApplyResult

    static readonly SkipPeers : ApplyResult

    static readonly Stop : ApplyResult

    static readonly all : Array<ApplyResult>

}

declare class Calendar {
  dateByAddingDateComponents(date: Date, components: DateComponents) : Date|null

   dateFromDateComponents(components: DateComponents) : Date|null

   dateComponentsFromDate(date: Date) : DateComponents

   dateComponentsBetweenDates(start: Date, end: Date) : DateComponents

   startOfDay(date: Date) : Date


  readonly identifier : String

    readonly locale : Locale|null

    readonly timeZone : TimeZone

  static readonly buddhist : Calendar

    static readonly chinese : Calendar

    static readonly coptic : Calendar

    static readonly current : Calendar

    static readonly ethiopicAmeteAlem : Calendar

    static readonly ethiopicAmeteMihret : Calendar

    static readonly gregorian : Calendar

    static readonly hebrew : Calendar

    static readonly indian : Calendar

    static readonly islamic : Calendar

    static readonly islamicCivil : Calendar

    static readonly islamicTabular : Calendar

    static readonly islamicUmmAlQura : Calendar

    static readonly iso8601 : Calendar

    static readonly japanese : Calendar

    static readonly persian : Calendar

    static readonly republicOfChina : Calendar

}

declare class Color {
  blend(otherColor: Color, fraction: Number) : Color|null

  static RGB(r: Number, g: Number, b: Number, a: Number|null) : Color

   static HSB(h: Number, s: Number, b: Number, a: Number|null) : Color

   static White(w: Number, a: Number|null) : Color

  readonly alpha : Number

    readonly blue : Number

    readonly brightness : Number

    readonly colorSpace : ColorSpace

    readonly green : Number

    readonly hue : Number

    readonly red : Number

    readonly saturation : Number

    readonly white : Number

  static readonly black : Color

    static readonly blue : Color

    static readonly brown : Color

    static readonly clear : Color

    static readonly cyan : Color

    static readonly darkGray : Color

    static readonly gray : Color

    static readonly green : Color

    static readonly lightGray : Color

    static readonly magenta : Color

    static readonly orange : Color

    static readonly purple : Color

    static readonly red : Color

    static readonly white : Color

    static readonly yellow : Color

}

declare class ColorSpace {



  static readonly CMYK : ColorSpace

    static readonly HSB : ColorSpace

    static readonly Named : ColorSpace

    static readonly Pattern : ColorSpace

    static readonly RGB : ColorSpace

    static readonly White : ColorSpace

    static readonly all : Array<ColorSpace>

}

declare class Console {
  log(message: Object, additional: Array<Object>|null)

   error(message: Object, additional: Array<Object>|null)

   info(message: Object, additional: Array<Object>|null)

   warn(message: Object, additional: Array<Object>|null)

   clear()




}

declare class ContentTree {




}

declare class Credentials {
  read(service: String) : Object|null

   write(service: String, username: String, password: String)

   remove(service: String)




}

declare class Data {
  toString() : String

   toBase64() : String

  static fromString(string: String) : Data

   static fromBase64(string: String) : Data

  readonly length : Number

    readonly toObject : Object|null


}

declare class Database {
  tagNamed(name: String) : Tag|null

   folderNamed(name: String) : Folder|null

   projectNamed(name: String) : Project|null

   projectsMatching(search: String) : Array<Project>

   foldersMatching(search: String) : Array<Folder>

   tagsMatching(search: String) : Array<Tag>

   taskNamed(name: String) : Task|null

   save()

   moveTasks(tasks: Array<Task>, position: Project|Task|TaskChildInsertionLocation)

   duplicateTasks(tasks: Array<Task>, position: Project|Task|TaskChildInsertionLocation) : TaskArray

   convertTasksToProjects(tasks: Array<Task>, position: Folder|FolderChildInsertionLocation) : Array<Project>

   moveSections(sections: Array<Project>|Folder, position: Folder|FolderChildInsertionLocation)

   duplicateSections(sections: Array<Project>|Folder, position: Folder|FolderChildInsertionLocation) : SectionArray

   moveTags(tags: Array<Tag>, position: Tag|TagChildInsertionLocation)

   duplicateTags(tags: Array<Tag>, position: Tag|TagChildInsertionLocation) : TagArray

   cleanUp()

   undo()

   redo()

   deleteObject(object: DatabaseObject)

   copyTasksToPasteboard(tasks: Array<Task>, pasteboard: Pasteboard)

   canPasteTasks(pasteboard: Pasteboard) : Boolean

   pasteTasksFromPasteboard(pasteboard: Pasteboard) : Array<Task>


  readonly canRedo : Boolean

    readonly canUndo : Boolean

    readonly document : DatabaseDocument|null

    readonly flattenedFolders : FolderArray

    readonly flattenedProjects : ProjectArray

    readonly flattenedSections : SectionArray

    readonly flattenedTags : TagArray

    readonly flattenedTasks : TaskArray

    readonly folders : FolderArray

    readonly inbox : Inbox

    readonly library : Library

    readonly projects : ProjectArray

    readonly settings : Settings

    readonly tags : Tags


}

declare class DatabaseDocument {
  newWindow() : Promise<DocumentWindow>

   newTabOnWindow(window: DocumentWindow) : Promise<DocumentWindow>


  readonly windows : Array<DocumentWindow>


}

declare class DatabaseObject {


  readonly id : ObjectIdentifier


}

declare class DateComponents {


  readonly date : Date|null

    day : Number|null

    era : Number|null

    hour : Number|null

    minute : Number|null

    month : Number|null

    nanosecond : Number|null

    second : Number|null

    timeZone : TimeZone|null

    year : Number|null


}

declare class DatedObject {


  added : Date|null

    modified : Date|null


}

declare class Decimal {
  toString() : String

   add(number: Decimal) : Decimal

   subtract(number: Decimal) : Decimal

   multiply(number: Decimal) : Decimal

   divide(number: Decimal) : Decimal

   compare(number: Decimal) : Number

   equals(number: Decimal) : Boolean

  static fromString(string: String) : Decimal


  static readonly maximum : Decimal

    static readonly minimum : Decimal

    static readonly notANumber : Decimal

    static readonly one : Decimal

    static readonly zero : Decimal

}

declare class Device {


  readonly iOS : Boolean

    readonly iPad : Boolean

    readonly mac : Boolean

    readonly operatingSystemVersion : Version

    readonly type : DeviceType|null

  static readonly current : Device

}

declare class DeviceType {



  static readonly all : Array<DeviceType>

    static readonly iPad : DeviceType

    static readonly iPhone : DeviceType

    static readonly mac : DeviceType

}

declare class Document {
  close(didCancel: Function|null)

   save()

   fileWrapper(type: String|null) : FileWrapper

   makeFileWrapper(baseName: String, type: String|null) : Promise<FileWrapper>

   undo()

   redo()

   show(resultFunction: Function|null)

  static makeNew(resultFunction: Function|null) : Promise<Document>

   static makeNewAndShow(resultFunction: Function|null) : Promise<Document>

  readonly canRedo : Boolean

    readonly canUndo : Boolean

    readonly fileType : String|null

    readonly name : String|null

    readonly writableTypes : Array<String>


}

declare class DocumentWindow {
  selectObjects(objects: Array<DatabaseObject>)

   forecastDayForDate(date: Date) : ForecastDay

   selectForecastDays(days: Array<ForecastDay>)


  readonly content : ContentTree|null

    focus : SectionArray|null

    readonly isTab : Boolean

    perspective : PerspectiveBuiltIn|PerspectiveCustom|null

    readonly selection : Selection

    readonly sidebar : SidebarTree|null

    readonly tabGroupWindows : Array<DocumentWindow>


}

declare class Email {
  generate()


  blindCarbonCopy : String|null

    body : String|null

    carbonCopy : String|null

    fileWrappers : Array<FileWrapper>

    receiver : String|null

    subject : String|null


}

declare class FilePicker {
  show() : Promise<Array<URL>>


  folders : Boolean

    message : String

    multiple : Boolean

    types : Array<TypeIdentifier>|null


}

declare class FileSaver {
  show(fileWrapper: FileWrapper) : Promise<URL>


  message : String

    nameLabel : String

    prompt : String

    types : Array<TypeIdentifier>|null


}

declare class FileWrapper {
  filenameForChild(child: FileWrapper) : String|null

  static wthContents(name: String|null, contents: Data) : FileWrapper

   static wthChildren(name: String|null, children: Array<FileWrapper>) : FileWrapper

  readonly children : Array<FileWrapper>

    readonly contents : Data|null

    readonly destination : URL|null

    filename : String|null

    preferredFilename : String|null

    readonly type : FileWrapperType


}

declare class FileWrapperType {



  static readonly Directory : FileWrapperType

    static readonly File : FileWrapperType

    static readonly Link : FileWrapperType

    static readonly all : Array<FileWrapperType>

}

declare class Folder {
  folderNamed(name: String) : Folder|null

   projectNamed(name: String) : Project|null

   sectionNamed(name: String) : Project|Folder|null

   childNamed(name: String) : Project|Folder|null

   apply(fn: Function) : ApplyResult|null

  static byIdentifier(identifier: String) : Folder|null

  readonly after : FolderChildInsertionLocation

    readonly before : FolderChildInsertionLocation

    readonly beginning : FolderChildInsertionLocation

    readonly children : SectionArray

    readonly ending : FolderChildInsertionLocation

    readonly flattenedChildren : SectionArray

    readonly flattenedFolders : FolderArray

    readonly flattenedProjects : ProjectArray

    readonly flattenedSections : SectionArray

    readonly folders : FolderArray

    name : String

    readonly parent : Folder|null

    readonly projects : ProjectArray

    readonly sections : SectionArray

    status : FolderStatus


}

declare class FolderChildInsertionLocation {




}

declare class FolderStatus {



  static readonly Active : FolderStatus

    static readonly Dropped : FolderStatus

    static readonly all : Array<FolderStatus>

}

declare class FolderArray {
  byName(name: String) : Folder|null




}

declare class ForecastDay {
  badgeKind() : ForecastDayStatus


  readonly badgeCount : Number

    readonly date : Date

    readonly deferredCount : Number

    readonly kind : ForecastDayKind

    readonly name : String

  static badgeCountsIncludeDeferredItems : Boolean

}

declare class ForecastDayKind {



  static readonly Day : ForecastDayKind

    static readonly DistantFuture : ForecastDayKind

    static readonly FutureMonth : ForecastDayKind

    static readonly Past : ForecastDayKind

    static readonly Today : ForecastDayKind

    static readonly all : Array<ForecastDayKind>

}

declare class ForecastDayStatus {



  static readonly Available : ForecastDayStatus

    static readonly DueSoon : ForecastDayStatus

    static readonly NoneAvailable : ForecastDayStatus

    static readonly Overdue : ForecastDayStatus

    static readonly all : Array<ForecastDayStatus>

}

declare class Form {
  addField(field: FormField, index: Number|null)

   removeField(field: FormField)

   show(title: String, confirmTitle: String) : Promise<Form>


  readonly fields : Array<FormField>

    validate : Function|null

    readonly values : Object


}

declare class FormField {


  readonly displayName : String|null

    readonly key : String


}

declare class FormFieldCheckbox {




}

declare class FormFieldDate {




}

declare class FormFieldMultipleOptions {




}

declare class FormFieldOption {


  allowsNull : Boolean

    nullOptionTitle : String|null


}

declare class FormFieldPassword {




}

declare class FormFieldString {




}

declare class Formatter {




}

declare class FormatterDate {
  stringFromDate(date: Date) : String

   dateFromString(string: String) : Date|null

  static wthStyle(dateStyle: FormatterDateStyle, timeStyle: FormatterDateStyle|null) : FormatterDate

   static wthFormat(format: String) : FormatterDate

  calendar : Calendar

    readonly dateFormat : String

    locale : Locale

    timeZone : TimeZone

  static readonly iso8601 : FormatterDate

}

declare class FormatterDateStyle {



  static readonly Full : FormatterDateStyle

    static readonly Long : FormatterDateStyle

    static readonly Medium : FormatterDateStyle

    static readonly Short : FormatterDateStyle

    static readonly all : Array<FormatterDateStyle>

}

declare class FormatterDecimal {
  stringFromDecimal(number: Decimal) : String|null

   decimalFromString(string: String) : Decimal|null

  static currency(code: String|null) : FormatterDecimal

  decimalSeparator : String

    negativeFormat : String

    positiveFormat : String

    thousandsSeparator : String|null

    zeroSymbol : String|null

  static readonly currencyCodes : Array<String>

    static readonly custom : FormatterDecimal

    static readonly decimal : FormatterDecimal

    static readonly percent : FormatterDecimal

    static readonly percentWithDecimal : FormatterDecimal

    static readonly plain : FormatterDecimal

    static readonly thousandsAndDecimal : FormatterDecimal

}

declare class FormatterDuration {
  stringFromDecimal(number: Decimal) : String|null

   decimalFromString(string: String) : Decimal|null


  hoursPerDay : Number

    hoursPerWeek : Number

    useVerboseFormat : Boolean


}

declare class Inbox {
  apply(fn: Function) : ApplyResult|null


  readonly beginning : TaskChildInsertionLocation

    readonly ending : TaskChildInsertionLocation


}

declare class Library {
  apply(fn: Function) : ApplyResult|null


  readonly beginning : FolderChildInsertionLocation

    readonly ending : FolderChildInsertionLocation


}

declare class LigatureStyle {



  static readonly All : LigatureStyle

    static readonly Essential : LigatureStyle

    static readonly Standard : LigatureStyle

    static readonly all : Array<LigatureStyle>

}

declare class Locale {


  readonly calendar : Calendar

    readonly currencyCode : String|null

    readonly identifier : String

  static readonly identifiers : Array<String>

}

declare class MenuItem {


  checked : Boolean

    label : String


}

declare class NamedStyle {
  remove()


  readonly after : NamedStylePosition

    readonly before : NamedStylePosition

    readonly identifier : String

    name : String


}

declare class NamedStyleList {
  add(name: String|null) : NamedStyle

   byName(name: String) : NamedStyle|null

   byIdentifier(identifier: String) : NamedStyle|null

   moveStyles(styles: Array<NamedStyle>, position: NamedStylePosition)

   duplicateStyles(styles: Array<NamedStyle>, position: NamedStylePosition) : Array<NamedStyle>


  readonly all : Array<NamedStyle>

    readonly beginning : NamedStylePosition

    readonly end : NamedStylePosition


}

declare class NamedStylePosition {




}

declare class ObjectIdentifier {


  readonly objectClass : Object|null

    readonly primaryKey : String


}

declare class Pasteboard {
  availableType(types: Array<TypeIdentifier>) : TypeIdentifier|null

   addItems(items: Array<PasteboardItem>)

   clear()

   dataForType(type: TypeIdentifier) : Data|null

   setDataForType(data: Data, type: TypeIdentifier)

   stringForType(type: TypeIdentifier) : String|null

   setStringForType(string: String, type: TypeIdentifier)

  static makeUnique() : Pasteboard

  URL : URL|null

    URLs : Array<URL>|null

    color : Color|null

    colors : Array<Color>|null

    readonly hasColors : Boolean

    readonly hasImages : Boolean

    readonly hasStrings : Boolean

    readonly hasURLs : Boolean

    image : typeof Image|null

    images : Array<typeof Image>|null

    items : Array<PasteboardItem>

    string : String|null

    strings : Array<String>|null

    readonly types : Array<TypeIdentifier>

  static readonly general : Pasteboard

}

declare class PasteboardItem {
  dataForType(type: TypeIdentifier) : Data|null

   setDataForType(data: Data, type: TypeIdentifier)

   stringForType(type: TypeIdentifier) : String|null

   setStringForType(string: String, type: TypeIdentifier)


  readonly types : Array<TypeIdentifier>


}

declare class Perspective {



  static readonly all : Array<PerspectiveBuiltIn>|PerspectiveCustom

}

declare class PerspectiveBuiltIn {


  readonly name : String

  static readonly Flagged : PerspectiveBuiltIn

    static readonly Forecast : PerspectiveBuiltIn

    static readonly Inbox : PerspectiveBuiltIn

    static readonly Nearby : PerspectiveBuiltIn

    static readonly Projects : PerspectiveBuiltIn

    static readonly Review : PerspectiveBuiltIn

    static readonly Search : PerspectiveBuiltIn

    static readonly Tags : PerspectiveBuiltIn

    static readonly all : Array<PerspectiveBuiltIn>

}

declare class PerspectiveCustom {
  fileWrapper() : FileWrapper

   writeFileRepresentationIntoDirectory(parentURL: URL) : URL

  static byName(name: String) : PerspectiveCustom|null

   static byIdentifier(identifier: String) : PerspectiveCustom|null

  readonly identifier : String

    readonly name : String

  static readonly all : Array<PerspectiveCustom>

}

declare class PlugIn {
  library(identifier: String) : Object|null

   action(identifier: String) : PlugInAction|null

   handler(identifier: String) : PlugInHandler|null

   resourceNamed(name: String) : URL|null

   imageNamed(name: String) : typeof Image|null

  static find(identifier: String, minimumVersion: Version|null) : PlugIn|null

  readonly URL : URL|null

    readonly actions : Array<PlugInAction>

    readonly author : String

    readonly description : String

    readonly displayName : String

    readonly handlers : Array<PlugInHandler>

    readonly identifier : String

    readonly libraries : Array<PlugInLibrary>

    readonly version : Version

  static readonly all : Array<PlugIn>

}

declare class PlugInAction {


  readonly description : String

    readonly label : String

    readonly longLabel : String

    readonly mediumLabel : String

    readonly name : String

    readonly paletteLabel : String

    readonly perform : Function

    readonly plugIn : PlugIn

    readonly shortLabel : String

    validate : Function|null


}

declare class PlugInHandler {


  readonly invoke : Function

    readonly name : String

    readonly plugIn : PlugIn

    willAttach : Function|null

    willDetach : Function|null


}

declare class PlugInLibrary {


  readonly name : String

    readonly plugIn : PlugIn

    readonly version : Version


}

declare class Preferences {
  read(key: String) : Object|null

   readBoolean(key: String) : Boolean

   readString(key: String) : String|null

   readNumber(key: String) : Number

   readDate(key: String) : Date|null

   readData(key: String) : Data|null

   write(key: String, value: Boolean|String|Number|Date|Data|null)

   remove(key: String)


  readonly identifier : String


}

declare class Project {
  taskNamed(name: String) : Task|null

   appendStringToNote(stringToAppend: String)

   addAttachment(attachment: FileWrapper)

   removeAttachmentAtIndex(index: Number)

   markComplete(date: Date|null) : Task

   markIncomplete()

   addNotification(info: Number|Date) : TaskNotification

   removeNotification(notification: TaskNotification)

   addTag(tag: Tag)

   addTags(tags: Array<Tag>)

   removeTag(tag: Tag)

   removeTags(tags: Array<Tag>)

   clearTags()

   addLinkedFileURL(url: URL)

   removeLinkedFileWithURL(url: URL)

  static byIdentifier(identifier: String) : Project|null

  readonly after : FolderChildInsertionLocation

    attachments : Array<FileWrapper>

    readonly before : FolderChildInsertionLocation

    readonly beginning : TaskChildInsertionLocation

    readonly children : TaskArray

    readonly completed : Boolean

    completedByChildren : Boolean

    completionDate : Date|null

    containsSingletonActions : Boolean

    defaultSingletonActionHolder : Boolean

    deferDate : Date|null

    dropDate : Date|null

    dueDate : Date|null

    readonly effectiveCompletedDate : Date|null

    readonly effectiveDeferDate : Date|null

    readonly effectiveDropDate : Date|null

    readonly effectiveDueDate : Date|null

    readonly effectiveFlagged : Boolean

    readonly ending : TaskChildInsertionLocation

    estimatedMinutes : Number|null

    flagged : Boolean

    readonly flattenedChildren : TaskArray

    readonly flattenedTasks : TaskArray

    readonly hasChildren : Boolean

    lastReviewDate : Date|null

    readonly linkedFileURLs : Array<URL>

    name : String

    nextReviewDate : Date|null

    readonly nextTask : Task|null

    note : String

    readonly notifications : Array<TaskNotification>

    readonly parentFolder : Folder|null

    repetitionRule : TaskRepetitionRule|null

    reviewInterval : ProjectReviewInterval

    sequential : Boolean

    shouldUseFloatingTimeZone : Boolean

    status : ProjectStatus

    readonly tags : TagArray

    readonly task : Task

    readonly taskStatus : TaskStatus

    readonly tasks : TaskArray


}

declare class ProjectReviewInterval {


  steps : Number

    unit : String


}

declare class ProjectStatus {



  static readonly Active : ProjectStatus

    static readonly Done : ProjectStatus

    static readonly Dropped : ProjectStatus

    static readonly OnHold : ProjectStatus

    static readonly all : Array<ProjectStatus>

}

declare class ProjectArray {
  byName(name: String) : Project|null




}

declare class SectionArray {
  byName(name: String) : Project|Folder|null




}

declare class Selection {


  readonly allObjects : Array<Object>

    readonly database : Database|null

    readonly databaseObjects : Array<DatabaseObject>

    readonly document : DatabaseDocument|null

    readonly folders : FolderArray

    readonly projects : ProjectArray

    readonly tags : TagArray

    readonly tasks : TaskArray

    readonly window : DocumentWindow|null


}

declare class Settings {
  defaultObjectForKey(key: String) : Object|null

   hasNonDefaultObjectForKey(key: String) : Boolean

   objectForKey(key: String) : Object|null

   setObjectForKey(value: Object|null, key: String)

   boolForKey(key: String) : Boolean

   setBoolForKey(value: Boolean, key: String)

   integerForKey(key: String) : Number

   setIntegerForKey(value: Number, key: String)


  readonly keys : Array<String>


}

declare class SharePanel {
  addItem(shareItem: URL|String|typeof Image|FileWrapper)

   addItems(shareItems: Array<URL>|String|typeof Image|FileWrapper)

   removeItem(shareItem: URL|String|typeof Image|FileWrapper)

   removeItems(shareItems: Array<URL>|String|typeof Image|FileWrapper)

   clearItems()

   show()


  items : Array<URL>|String|typeof Image|FileWrapper


}

declare class SidebarTree {




}

declare class Style {
  set(attribute: StyleAttribute, value: Object|null) : Boolean

   get(attribute: StyleAttribute) : Object|null

   localValueForAttribute(attribute: StyleAttribute) : Object|null

   addNamedStyle(namedStyle: NamedStyle)

   removeNamedStyle(namedStyle: NamedStyle)

   influencedBy(otherStyle: Style) : Boolean

   setStyle(style: Style)

   clear()


  fontFillColor : Color

    readonly link : URL|null

    readonly locallyDefinedAttributes : Array<StyleAttribute>

    readonly namedStyles : Array<NamedStyle>


}

declare class StyleAttribute {


  readonly defaultValue : Object

    readonly key : String

  static readonly BackgroundColor : StyleAttribute

    static readonly BaselineOffset : StyleAttribute

    static readonly BaselineSuperscript : StyleAttribute

    static readonly Expansion : StyleAttribute

    static readonly FontCondensed : StyleAttribute

    static readonly FontFamily : StyleAttribute

    static readonly FontFillColor : StyleAttribute

    static readonly FontFixedPitch : StyleAttribute

    static readonly FontItalic : StyleAttribute

    static readonly FontName : StyleAttribute

    static readonly FontNarrow : StyleAttribute

    static readonly FontSize : StyleAttribute

    static readonly FontStrokeColor : StyleAttribute

    static readonly FontStrokeWidth : StyleAttribute

    static readonly FontWeight : StyleAttribute

    static readonly KerningAdjustment : StyleAttribute

    static readonly LigatureSelection : StyleAttribute

    static readonly Link : StyleAttribute

    static readonly Obliqueness : StyleAttribute

    static readonly ParagraphAlignment : StyleAttribute

    static readonly ParagraphBaseWritingDirection : StyleAttribute

    static readonly ParagraphDefaultTabInterval : StyleAttribute

    static readonly ParagraphFirstLineHeadIndent : StyleAttribute

    static readonly ParagraphHeadIndent : StyleAttribute

    static readonly ParagraphLineHeightMultiple : StyleAttribute

    static readonly ParagraphLineSpacing : StyleAttribute

    static readonly ParagraphMaximumLineHeight : StyleAttribute

    static readonly ParagraphMinimumLineHeight : StyleAttribute

    static readonly ParagraphSpacing : StyleAttribute

    static readonly ParagraphSpacingBefore : StyleAttribute

    static readonly ParagraphTabStops : StyleAttribute

    static readonly ParagraphTailIndent : StyleAttribute

    static readonly ShadowBlurRadius : StyleAttribute

    static readonly ShadowColor : StyleAttribute

    static readonly ShadowOffset : StyleAttribute

    static readonly StrikethroughAffinity : StyleAttribute

    static readonly StrikethroughColor : StyleAttribute

    static readonly StrikethroughPattern : StyleAttribute

    static readonly StrikethroughStyle : StyleAttribute

    static readonly UnderlineAffinity : StyleAttribute

    static readonly UnderlineColor : StyleAttribute

    static readonly UnderlinePattern : StyleAttribute

    static readonly UnderlineStyle : StyleAttribute

}

declare class Tag {
  tagNamed(name: String) : Tag|null

   childNamed(name: String) : Tag|null

   apply(fn: Function) : ApplyResult|null

  static byIdentifier(identifier: String) : Tag|null

  readonly after : TagChildInsertionLocation

    allowsNextAction : Boolean

    readonly availableTasks : TaskArray

    readonly before : TagChildInsertionLocation

    readonly beginning : TagChildInsertionLocation

    readonly children : TagArray

    readonly ending : TagChildInsertionLocation

    readonly flattenedChildren : TagArray

    readonly flattenedTags : TagArray

    name : String

    readonly parent : Tag|null

    readonly projects : ProjectArray

    readonly remainingTasks : TaskArray

    status : TagStatus

    readonly tags : TagArray

    readonly tasks : TaskArray

  static readonly forecastTag : Tag|null

}

declare class TagChildInsertionLocation {




}

declare class TagStatus {



  static readonly Active : TagStatus

    static readonly Dropped : TagStatus

    static readonly OnHold : TagStatus

    static readonly all : Array<TagStatus>

}

declare class TagArray {
  byName(name: String) : Tag|null




}

declare class Tags {
  apply(fn: Function) : ApplyResult|null


  readonly beginning : TagChildInsertionLocation

    readonly ending : TagChildInsertionLocation


}

declare class Task {
  taskNamed(name: String) : Task|null

   childNamed(name: String) : Task|null

   appendStringToNote(stringToAppend: String)

   addLinkedFileURL(url: URL)

   removeLinkedFileWithURL(url: URL)

   addAttachment(attachment: FileWrapper)

   removeAttachmentAtIndex(index: Number)

   addTag(tag: Tag)

   addTags(tags: Array<Tag>)

   removeTag(tag: Tag)

   removeTags(tags: Array<Tag>)

   clearTags()

   markComplete(date: Date|null) : Task

   markIncomplete()

   drop(allOccurrences: Boolean)

   apply(fn: Function) : ApplyResult|null

   addNotification(info: Number|Date) : TaskNotification

   removeNotification(notification: TaskNotification)

  static byParsingTransportText(text: String, singleTask: Boolean|null) : Array<Task>

   static byIdentifier(identifier: String) : Task|null

  readonly after : TaskChildInsertionLocation

    assignedContainer : Project|Task|Inbox|null

    attachments : Array<FileWrapper>

    readonly before : TaskChildInsertionLocation

    readonly beginning : TaskChildInsertionLocation

    readonly children : TaskArray

    readonly completed : Boolean

    completedByChildren : Boolean

    readonly completionDate : Date|null

    readonly containingProject : Project|null

    deferDate : Date|null

    readonly dropDate : Date|null

    dueDate : Date|null

    readonly effectiveCompletedDate : Date|null

    readonly effectiveDeferDate : Date|null

    readonly effectiveDropDate : Date|null

    readonly effectiveDueDate : Date|null

    readonly effectiveFlagged : Boolean

    readonly ending : TaskChildInsertionLocation

    estimatedMinutes : Number|null

    flagged : Boolean

    readonly flattenedChildren : TaskArray

    readonly flattenedTasks : TaskArray

    readonly hasChildren : Boolean

    readonly inInbox : Boolean

    readonly linkedFileURLs : Array<URL>

    name : String

    note : String

    readonly notifications : Array<TaskNotification>

    readonly parent : Task|null

    readonly project : Project|null

    repetitionRule : TaskRepetitionRule|null

    sequential : Boolean

    shouldUseFloatingTimeZone : Boolean

    readonly tags : TagArray

    readonly taskStatus : TaskStatus

    readonly tasks : TaskArray


}

declare class TaskChildInsertionLocation {




}

declare class TaskNotification {


  absoluteFireDate : Date

    readonly initialFireDate : Date

    readonly isSnoozed : Boolean

    readonly kind : TaskNotificationKind

    readonly nextFireDate : Date|null

    relativeFireOffset : Number

    repeatInterval : Number

    readonly task : Task|null

    readonly usesFloatingTimeZone : Boolean


}

declare class TaskNotificationKind {



  static readonly Absolute : TaskNotificationKind

    static readonly DueRelative : TaskNotificationKind

    static readonly Unknown : TaskNotificationKind

    static readonly all : Array<TaskNotificationKind>

}

declare class TaskRepetitionMethod {



  static readonly DeferUntilDate : TaskRepetitionMethod

    static readonly DueDate : TaskRepetitionMethod

    static readonly Fixed : TaskRepetitionMethod

    static readonly None : TaskRepetitionMethod

    static readonly all : Array<TaskRepetitionMethod>

}

declare class TaskRepetitionRule {
  firstDateAfterDate(date: Date) : Date


  readonly method : TaskRepetitionMethod

    readonly ruleString : String


}

declare class TaskStatus {



  static readonly Available : TaskStatus

    static readonly Blocked : TaskStatus

    static readonly Completed : TaskStatus

    static readonly Dropped : TaskStatus

    static readonly DueSoon : TaskStatus

    static readonly Next : TaskStatus

    static readonly Overdue : TaskStatus

    static readonly all : Array<TaskStatus>

}

declare class TaskArray {
  byName(name: String) : Task|null




}

declare class Text {
  textInRange(range: TextRange) : Text

   styleForRange(range: TextRange) : Style

   ranges(component: TextComponent, useEnclosingRange: Boolean|null) : Array<TextRange>

   replace(range: TextRange, wth: Text)

   append(text: Text)

   insert(position: TextPosition, text: Text)

   remove(range: TextRange)

   find(string: String, options: Array<TextFindOption>|null, range: TextRange|null) : TextRange|null

  static makeFileAttachment(fileWrapper: FileWrapper, style: Style) : Text

  readonly attachments : Array<Text>

    readonly attributeRuns : Array<Text>

    readonly characters : Array<Text>

    readonly end : TextPosition

    readonly fileWrapper : FileWrapper|null

    readonly paragraphs : Array<Text>

    readonly range : TextRange

    readonly sentences : Array<Text>

    readonly start : TextPosition

    string : String

    readonly style : Style

    readonly words : Array<Text>


}

declare class TextFindOption {



  static readonly Anchored : TextFindOption

    static readonly Backwards : TextFindOption

    static readonly CaseInsensitive : TextFindOption

    static readonly DiacriticInsensitive : TextFindOption

    static readonly ForcedOrdering : TextFindOption

    static readonly Literal : TextFindOption

    static readonly Numeric : TextFindOption

    static readonly RegularExpression : TextFindOption

    static readonly WidthInsensitive : TextFindOption

    static readonly all : Array<TextFindOption>

}

declare class TextPosition {




}

declare class TextRange {


  readonly end : TextPosition

    readonly isEmpty : Boolean

    readonly start : TextPosition


}

declare class TextAlignment {



  static readonly Center : TextAlignment

    static readonly Justified : TextAlignment

    static readonly Left : TextAlignment

    static readonly Natural : TextAlignment

    static readonly Right : TextAlignment

    static readonly all : Array<TextAlignment>

}

declare class TextComponent {



  static readonly Attachments : TextComponent

    static readonly AttributeRuns : TextComponent

    static readonly Characters : TextComponent

    static readonly Paragraphs : TextComponent

    static readonly Sentences : TextComponent

    static readonly Words : TextComponent

    static readonly all : Array<TextComponent>

}

declare class TimeZone {


  readonly abbreviation : String|null

    readonly daylightSavingTime : Boolean

    readonly secondsFromGMT : Number

  static readonly abbreviations : Array<String>

}

declare class Timer {
  cancel()

  static once(interval: Number, action: Function) : Timer

   static repeating(interval: Number, action: Function) : Timer

  readonly interval : Number


}

declare class ToolbarItem {


  image : typeof Image|null

    label : String

    toolTip : String|null


}

declare class Tree {
  nodeForObject(object: Object) : TreeNode|null

   nodesForObjects(object: Array<Object>) : Array<TreeNode>

   reveal(nodes: Array<TreeNode>)

   select(nodes: Array<TreeNode>, extending: Boolean|null)

   copyNodes(nodes: Array<TreeNode>, to: Pasteboard)

   paste(from: Pasteboard, parentNode: TreeNode|null, childIndex: Number|null)


  readonly rootNode : TreeNode

    readonly selectedNodes : Array<TreeNode>


}

declare class TreeNode {
  expand(completely: Boolean|null)

   collapse(completely: Boolean|null)

   expandNote(completely: Boolean|null)

   collapseNote(completely: Boolean|null)

   reveal()

   apply(fn: Function)


  readonly canCollapse : Boolean

    readonly canExpand : Boolean

    readonly children : Array<TreeNode>

    readonly index : Number

    readonly isExpanded : Boolean

    readonly isNoteExpanded : Boolean

    readonly isRevealed : Boolean

    readonly isRootNode : Boolean

    readonly isSelectable : Boolean

    isSelected : Boolean

    readonly level : Number

    readonly object : Object

    readonly parent : TreeNode|null

    readonly rootNode : TreeNode


}

declare class TypeIdentifier {
  conformsTo(other: TypeIdentifier) : Boolean


  readonly displayName : String

    readonly identifier : String

    readonly pathExtensions : Array<String>

  static readonly URL : TypeIdentifier

    static readonly binaryPropertyList : TypeIdentifier

    static readonly csv : TypeIdentifier

    static readonly editableTypes : Array<TypeIdentifier>

    static readonly gif : TypeIdentifier

    static readonly image : TypeIdentifier

    static readonly jpeg : TypeIdentifier

    static readonly json : TypeIdentifier

    static readonly ofocus : TypeIdentifier

    static readonly pdf : TypeIdentifier

    static readonly plainText : TypeIdentifier

    static readonly png : TypeIdentifier

    static readonly propertyList : TypeIdentifier

    static readonly readableTypes : Array<TypeIdentifier>

    static readonly rtf : TypeIdentifier

    static readonly rtfd : TypeIdentifier

    static readonly taskPaper : TypeIdentifier

    static readonly tasks : TypeIdentifier

    static readonly tasksAndFolders : TypeIdentifier

    static readonly tiff : TypeIdentifier

    static readonly writableTypes : Array<TypeIdentifier>

    static readonly xmlPropertyList : TypeIdentifier

}

declare class URL {
  fetch(success: Function, failure: Function|null)

   call(success: Function, failure: Function|null)

   open()

   find(types: Array<TypeIdentifier>, recurse: Boolean|null) : Promise<Array<URL>>

   toString() : String

   appendingPathComponent(component: String) : URL

   deletingLastPathComponent() : URL

  static choose(types: Array<String>) : URL|null

   static chooseFolder() : URL|null

   static fromString(string: String) : URL|null

   static tellScript(app: String, js: String, arg: Object|null) : URL|null

   static tellFunction(app: String, jsFunction: Function, arg: Object|null) : URL|null

  readonly string : String

    readonly toObject : Object|null

  static readonly currentAppScheme : String

}

declare class URLFetchRequest {
  fetch() : Promise<URLFetchResponse>

  static fromString(string: String) : URLFetchRequest|null

  bodyData : Data|null

    bodyString : String|null

    cache : String|null

    headers : Object

    method : String|null

    url : URL|null


}

declare class URLFetchResponse {


  readonly bodyData : Data|null

    readonly bodyString : String|null

    readonly headers : Object

    readonly mimeType : String|null

    readonly statusCode : Number

    readonly textEncodingName : String|null

    readonly url : URL|null


}

declare class UnderlineAffinity {



  static readonly ByWord : UnderlineAffinity

    static readonly None : UnderlineAffinity

    static readonly all : Array<UnderlineAffinity>

}

declare class UnderlinePattern {



  static readonly Dash : UnderlinePattern

    static readonly DashDot : UnderlinePattern

    static readonly DashDotDot : UnderlinePattern

    static readonly Dot : UnderlinePattern

    static readonly Solid : UnderlinePattern

    static readonly all : Array<UnderlinePattern>

}

declare class UnderlineStyle {



  static readonly Double : UnderlineStyle

    static readonly None : UnderlineStyle

    static readonly Single : UnderlineStyle

    static readonly Thick : UnderlineStyle

    static readonly all : Array<UnderlineStyle>

}

declare class Version {
  equals(version: Version) : Boolean

   atLeast(version: Version) : Boolean

   isAfter(version: Version) : Boolean

   isBefore(version: Version) : Boolean


  readonly versionString : String


}

declare class Window {
  close()

}
