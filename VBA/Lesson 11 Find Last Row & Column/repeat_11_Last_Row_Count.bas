Attribute VB_Name = "repeat_11_Last_Row_Count"
Option Explicit

Sub repeat_11()

    MsgBox ThisWorkbook.Worksheets(1).Range("A1:D7").count

End Sub

Sub repeat_11_1()

    MsgBox ThisWorkbook.Worksheets(1).Cells(1, Columns.count).End(xlToLeft).Column
    
End Sub

Sub repeat_11_2()

    MsgBox ThisWorkbook.Worksheets(1).Range("C" & Rows.count).End(xlUp).Row

End Sub

