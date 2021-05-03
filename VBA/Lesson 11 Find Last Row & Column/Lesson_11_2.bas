Attribute VB_Name = "Lesson_11_2"
Option Explicit

Sub identifyingLastRow()

    Dim lastRow As Long
    
    lastRow = Worksheets(1).Cells(Rows.count, 1).End(xlUp).Row
    MsgBox lastRow

End Sub

Sub identifyingLastColumn()

    Dim lastColumn As Long
    
    lastColumn = Worksheets(1).Cells(10, Columns.count).End(xlToLeft).Column
    MsgBox lastColumn
    

End Sub

Sub identifyingLastRow_variant2()

    Dim lastRow As Long
    
    lastRow = Worksheets(1).Range("C" & Rows.count).End(xlUp).Row
    MsgBox lastRow

End Sub

'Sub identifyingLastColumn_variant2()
'
'    Dim lastColumn As Long
'
'    lastColumn = Worksheets(1).Range( & "2").End(xlToLeft).Column
'    MsgBox lastColumn
'
'End Sub

Sub checker()

MsgBox ThisWorkbook.Worksheets(1).Columns.count

End Sub
