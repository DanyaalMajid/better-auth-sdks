# OrganizationLeavePostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organization_id** | **str** | The organization Id for the member to leave. Eg: \&quot;organization-id\&quot; | 

## Example

```python
from better_auth.models.organization_leave_post_request import OrganizationLeavePostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationLeavePostRequest from a JSON string
organization_leave_post_request_instance = OrganizationLeavePostRequest.from_json(json)
# print the JSON string representation of the object
print(OrganizationLeavePostRequest.to_json())

# convert the object into a dict
organization_leave_post_request_dict = organization_leave_post_request_instance.to_dict()
# create an instance of OrganizationLeavePostRequest from a dict
organization_leave_post_request_from_dict = OrganizationLeavePostRequest.from_dict(organization_leave_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


